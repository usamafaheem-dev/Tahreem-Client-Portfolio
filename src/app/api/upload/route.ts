
import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
        }

        // Use the file name or a custom one
        const blob = await put(filename || file.name, file, {
            access: 'public',
            addRandomSuffix: true,
        });

        return NextResponse.json({
            success: true,
            url: blob.url,
        });
    } catch (error: any) {
        console.error('Upload error:', error);
        return NextResponse.json({
            success: false,
            message: 'Upload failed: ' + (error.message || String(error))
        }, { status: 500 });
    }
}

