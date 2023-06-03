/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
          protocol: "https",
          hostname: "github-production-user-asset-*.s3.amazonaws.com",
          port: "",
          pathname: "*/**",
        }, {
          protocol: "https",
          hostname: "picsum.photos",
          port: "",
          pathname: "*/**"
        }],
      },
}

module.exports = nextConfig
