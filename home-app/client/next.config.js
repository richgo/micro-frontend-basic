const { ACCOUNT_URL } = process.env
const { PRODUCT_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/account',
        destination: `${ACCOUNT_URL}/account`,
      },
      {
        source: '/account/:path*',
        destination: `${ACCOUNT_URL}/account/:path*`,
      },
      {
        source: '/products',
        destination: `${PRODUCT_URL}/products`,
      },
      {
        source: '/products/:path*',
        destination: `${PRODUCT_URL}/products/:path*`,
      },
    ]
  },
}
