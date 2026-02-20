import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import fs from 'fs';
import path from 'path';

const COLLECTION_NAME = 'portfolio';
const DATABASE_NAME = 'portfolio_db';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        if (!process.env.MONGODB_URI) {
            return NextResponse.json({ error: 'MONGODB_URI is not defined' }, { status: 500 });
        }

        const client = await clientPromise;
        const db = client.db(DATABASE_NAME);

        // Try to fetch data from MongoDB
        let data = await db.collection(COLLECTION_NAME).findOne({});

        // If no data in DB, seed it from the local portfolio.json
        if (!data) {
            console.log("No data found in MongoDB, attempting to seed...");
            const dataPath = path.join(process.cwd(), 'src/data/portfolio.json');
            if (fs.existsSync(dataPath)) {
                const fileContents = fs.readFileSync(dataPath, 'utf8');
                const localData = JSON.parse(fileContents);
                if (!localData.navbar) {
                    localData.navbar = { logoType: 'text', logoText: 'Tehreem Arif', logoImage: '' };
                }

                // Save to MongoDB
                const result = await db.collection(COLLECTION_NAME).insertOne(localData);
                data = await db.collection(COLLECTION_NAME).findOne({ _id: result.insertedId });
                console.log("Database seeded from portfolio.json");
            } else {
                return NextResponse.json({ error: 'Initial data file not found' }, { status: 404 });
            }
        }

        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'no-store, max-age=0',
            }
        });
    } catch (error: any) {
        console.error("Database connection failed, falling back to local portfolio.json:", error.message);

        // Fallback to local file if DB is down
        try {
            const dataPath = path.join(process.cwd(), 'src/data/portfolio.json');
            if (fs.existsSync(dataPath)) {
                const fileContents = fs.readFileSync(dataPath, 'utf8');
                const localData = JSON.parse(fileContents);
                return NextResponse.json(localData);
            }
        } catch (fallbackError) {
            console.error("Fallback also failed:", fallbackError);
        }

        return NextResponse.json({
            error: 'Database error and fallback failed',
            message: error.message || String(error)
        }, { status: 500 });
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
