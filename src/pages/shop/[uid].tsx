import React from 'react'
import { client } from 'shopify'
import { NextPage } from 'next'
import { IProduct } from 'shopify/types'
import { ProductPage } from 'components'

interface IProductProps {
  product: IProduct
}

// TODO: Handle 404s

const Product: NextPage<IProductProps> = ({ product }) => {
  return <ProductPage product={product} />
}

Product.getInitialProps = async ({ query }) => {
  const product = await client.product.fetchByHandle(query.uid)
  return { product }
}

export default Product
