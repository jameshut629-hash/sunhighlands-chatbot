import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow embedding on WordPress and other sites
  allowedDevOrigins: [
    '.space.chatglm.site',
    '.space-z.ai',
    'azusports.com.au',
    'www.azusports.com.au',
  ],
  // Vercel/serverless compatibility
  serverExternalPackages: ['nodemailer'],
  // CORS headers for API routes + cache-busting for JS bundles
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
      {
        // Force no-cache on HTML pages to always serve latest version
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
      {
        // JS/CSS chunks - short cache with revalidation
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
    ];
  },
};

export default nextConfig;
