import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
    try {
        if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
            return NextResponse.json({
                success: false,
                message: 'Cloudinary credentials are not configured on the server.'
            }, { status: 500 });
        }

        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return new Promise<NextResponse>((resolve) => {
            cloudinary.uploader.upload_stream(
                { resource_type: 'auto' },
                (error, result) => {
                    if (error) {
                        console.error('Cloudinary upload error:', error);
                        resolve(NextResponse.json({
                            success: false,
                            message: 'Cloudinary upload failed: ' + (error.message || 'Unknown error'),
                            error: error
                        }, { status: 500 }));
                    } else {
                        resolve(NextResponse.json({ success: true, url: result?.secure_url }));
                    }
                }
            ).end(buffer);
        });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({
            success: false,
            message: 'Upload processing failed: ' + String(error)
        }, { status: 500 });
    }
}
