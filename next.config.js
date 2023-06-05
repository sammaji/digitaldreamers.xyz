const ContentSecurityPolicy = `default-src https: 'unsafe-eval' 'unsafe-inline'; script-src 'none'; object-src 'none'; style-src 'self'; font-src 'self'; base-uri 'self'; require-trusted-types-for 'script';`;

/** @type {import('next').NextConfig} */
const nextConfig = {
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
            value: ContentSecurityPolicy,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
