/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'righteous-shallot-c04.notion.site',
      },
    ],
  },
}

module.exports = nextConfig
