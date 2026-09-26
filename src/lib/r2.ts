import crypto from 'crypto';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  HeadObjectCommand,
} from '@aws-sdk/client-s3';

export interface R2UploadResult {
  url: string;
  key: string;
  bucket: string;
  size: number;
  contentType: string;
}

const getR2Config = () => {
  const accountId = String(process.env.R2_ACCOUNT_ID || '').trim();
  const endpoint =
    String(process.env.R2_ENDPOINT || '').trim() ||
    (accountId ? `https://${accountId}.r2.cloudflarestorage.com` : '');

  return {
    enabled: process.env.R2_ENABLED !== 'false',
    accountId,
    endpoint,
    bucketName: String(process.env.R2_BUCKET_NAME || 'lambda').trim(),
    accessKeyId: String(process.env.R2_ACCESS_KEY_ID || '').trim(),
    secretAccessKey: String(process.env.R2_SECRET_ACCESS_KEY || '').trim(),
    publicBaseUrl: String(process.env.R2_PUBLIC_BASE_URL || 'https://lambworker.com')
      .trim()
      .replace(/\/$/, ''),
  };
};

let r2Client: S3Client | null = null;

export const getR2Client = (): S3Client => {
  const config = getR2Config();
  if (!config.accessKeyId || !config.secretAccessKey || !config.endpoint) {
    throw new Error('Cloudflare R2 credentials or endpoint not properly configured');
  }

  if (!r2Client) {
    r2Client = new S3Client({
      region: 'auto',
      endpoint: config.endpoint,
      forcePathStyle: false,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });
  }

  return r2Client;
};

const getExtensionFromMimeType = (contentType: string): string => {
  const mime = contentType.split(';')[0].trim().toLowerCase();
  const map: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/gif': 'gif',
    'image/svg+xml': 'svg',
    'image/avif': 'avif',
  };
  return map[mime] || 'bin';
};

/**
 * Upload a file Buffer to Cloudflare R2
 * @param buffer - File data as Buffer
 * @param filename - Original filename (optional)
 * @param contentType - MIME type (e.g. image/jpeg)
 * @param folder - Folder prefix in the bucket (defaults to 'sunrise/images')
 */
export async function uploadToR2({
  buffer,
  filename,
  contentType = 'image/jpeg',
  folder = 'sunrise/images',
}: {
  buffer: Buffer;
  filename?: string;
  contentType?: string;
  folder?: string;
}): Promise<R2UploadResult> {
  const config = getR2Config();
  const client = getR2Client();

  const ext = filename
    ? filename.split('.').pop()?.toLowerCase() || getExtensionFromMimeType(contentType)
    : getExtensionFromMimeType(contentType);

  const cleanFolder = folder.replace(/^\/+|\/+$/g, '');
  const uniqueId = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
  const key = `${cleanFolder}/${uniqueId}.${ext}`;

  await client.send(
    new PutObjectCommand({
      Bucket: config.bucketName,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      CacheControl: 'public, max-age=31536000, immutable',
    })
  );

  const url = `${config.publicBaseUrl}/${key.split('/').map(encodeURIComponent).join('/')}`;

  return {
    url,
    key,
    bucket: config.bucketName,
    size: buffer.length,
    contentType,
  };
}
