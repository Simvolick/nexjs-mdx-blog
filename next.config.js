/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
            fs: false
        }
    }

    return config;
},
  reactStrictMode: true,
  images: {
    domains: ['dl.airtable.com'],
  },
  // Performance optimizations inspired by NextFaster
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // Enable compression and other optimizations
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
