// after
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/portfolio-next' : '',
    assetPrefix: isProd ? '/portfolio-next/' : '',
    images: { unoptimized: true },
    trailingSlash: true,
}

module.exports = nextConfig