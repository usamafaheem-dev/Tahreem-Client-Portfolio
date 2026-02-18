import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import fs from 'fs';
import path from 'path';

const COLLECTION_NAME = 'portfolio';
const DATABASE_NAME = 'portfolio_db';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db(DATABASE_NAME);

        // Try to fetch data from MongoDB
        let data = await db.collection(COLLECTION_NAME).findOne({});

        // If no data in DB, seed it from the local portfolio.json
        if (!data) {
            const dataPath = path.join(process.cwd(), 'src/data/portfolio.json');
            if (fs.existsSync(dataPath)) {
                const fileContents = fs.readFileSync(dataPath, 'utf8');
                const localData = JSON.parse(fileContents);

                // Save to MongoDB
                const result = await db.collection(COLLECTION_NAME).insertOne(localData);
                data = await db.collection(COLLECTION_NAME).findOne({ _id: result.insertedId });
                console.log("Database seeded from portfolio.json");
            } else {
                return NextResponse.json({ error: 'Data not found in DB or local file' }, { status: 404 });
            }
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error handling portfolio GET:", error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db(DATABASE_NAME);

        // We use replaceOne with upsert:true to keep only one document in the collection
        // Remove _id from body if it exists to avoid immutable field error
        const { _id, ...dataToSave } = body;

        await db.collection(COLLECTION_NAME).replaceOne(
            {},
            dataToSave,
            { upsert: true }
        );

        return NextResponse.json({ message: 'Data saved successfully in MongoDB', data: dataToSave });
    } catch (error) {
        console.error("Error saving to MongoDB:", error);
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}
