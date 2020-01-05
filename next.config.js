/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */

const path = require('path')
require('dotenv').config()

module.exports = {
  /**
   * For absolute imports
   */
  webpack(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.join('src'), path.join(__dirname, 'node_modules'), './'],
        extensions: ['.tsx', '.ts', '.js'],
      },
    }
  },

  /**
   * For environment variables
   */
  env: {
    SHOPIFY_URL: process.env.SHOPIFY_URL,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
}
