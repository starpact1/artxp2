/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // distDir: 'build',
  swcMinify: true,
  images: {
    domains: ["picsum.photos"]
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    })
    return config;
  }
}

module.exports = nextConfig
