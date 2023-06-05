const ContentSecurityPolicy = `
  enforce 'strict';
  script-src 'self';
  object-src 'self';
  style-src 'self';
  font-src 'self';
  base-uri 'self';
  `;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-production-user-asset-*.s3.amazonaws.com",
        port: "",
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "*/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g).trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
