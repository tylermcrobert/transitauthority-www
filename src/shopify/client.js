import Client from 'shopify-buy'
import fetch from 'isomorphic-unfetch'

export const client = Client.buildClient(
  {
    domain: process.env.SHOPIFY_URL,
    storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  fetch
)
