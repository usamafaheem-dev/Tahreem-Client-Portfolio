import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
        const api_key = process.env.CLOUDINARY_API_KEY;
        const api_secret = process.env.CLOUDINARY_API_SECRET;

        if (!cloud_name || !api_key || !api_secret) {
            const missing = [];
            if (!cloud_name) missing.push('CLOUD_NAME');
            if (!api_key) missing.push('API_KEY');
            if (!api_secret) missing.push('API_SECRET');

            return NextResponse.json({
                success: false,
                message: `Cloudinary credentials missing: ${missing.join(', ')}. Please redeploy on Vercel.`
            }, { status: 500 });
        }

        cloudinary.config({ cloud_name, api_key, api_secret });

        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const fileBase64 = `data:${file.type};base64,${buffer.toString('base64')}`;

        // Standard upload is often more stable in serverless than stream
        const uploadResponse = await cloudinary.uploader.upload(fileBase64, {
            resource_type: 'auto',
            folder: 'portfolio'
        });

        return NextResponse.json({
            success: true,
            url: uploadResponse.secure_url
        });

    } catch (error: any) {
        console.error('Upload error:', error);
        return NextResponse.json({
            success: false,
            message: 'Upload failed: ' + (error.message || String(error))
        }, { status: 500 });
    }
}
