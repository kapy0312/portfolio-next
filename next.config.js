/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/portfolio-next' : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: isProd ? '/portfolio-next/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
  // 讓元件裡的 <img> 也能帶上 basePath（Next 不會自動幫一般 <img> 加前綴）
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

module.exports = nextConfig
