import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'zsgymncshoschpxcqhne.supabase.co',
      },
      {
        protocol:'https',
        hostname:'img.clerk.com'
      }
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '4mb',
    },
  },
  /* config options here */
};

export default nextConfig;
