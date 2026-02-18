import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/data/portfolio.json');

export async function GET() {
    try {
        if (!fs.existsSync(dataPath)) {
            return NextResponse.json({ error: 'Data file not found' }, { status: 404 });
        }
        const fileContents = fs.readFileSync(dataPath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error reading portfolio data:", error);
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Ensure the directory exists
        const dir = path.dirname(dataPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(dataPath, JSON.stringify(body, null, 2), 'utf8');
        return NextResponse.json({ message: 'Data saved successfully', data: body });
    } catch (error) {
        console.error("Error saving portfolio data:", error);
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}
