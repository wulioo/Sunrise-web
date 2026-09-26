import { NextRequest, NextResponse } from 'next/server';
import { uploadToR2 } from '@/lib/r2';

export const dynamic = 'force-dynamic';

/**
 * GET /api/upload
 * Health check & configuration status
 */
export async function GET() {
  const configured = Boolean(
    process.env.R2_ACCOUNT_ID &&
    process.env.R2_ACCESS_KEY_ID &&
    process.env.R2_SECRET_ACCESS_KEY
  );

  return NextResponse.json({
    status: 'ok',
    configured,
    bucket: process.env.R2_BUCKET_NAME || 'lambda',
    publicBaseUrl: process.env.R2_PUBLIC_BASE_URL || 'https://lambworker.com',
  });
}

/**
 * POST /api/upload
 * Accepts multipart/form-data with a "file" field
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = (formData.get('file') || formData.get('image')) as File | null;
    const folder = (formData.get('folder') as string) || 'sunrise/images';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided. Please provide a "file" or "image" field in form data.' },
        { status: 400 }
      );
    }

    // Validate mime type
    const mimeType = file.type || 'image/jpeg';
    if (!mimeType.startsWith('image/')) {
      return NextResponse.json(
        { error: `File type "${mimeType}" is not an image.` },
        { status: 400 }
      );
    }

    // Read file buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudflare R2
    const result = await uploadToR2({
      buffer,
      filename: file.name,
      contentType: mimeType,
      folder,
    });

    return NextResponse.json({
      success: true,
      url: result.url,
      key: result.key,
      bucket: result.bucket,
      size: result.size,
      contentType: result.contentType,
      originalName: file.name,
    });
  } catch (error: any) {
    console.error('R2 upload failed:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to upload image to Cloudflare R2' },
      { status: 500 }
    );
  }
}
