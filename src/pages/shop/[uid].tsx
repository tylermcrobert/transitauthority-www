import React from 'react'
import { client } from 'shopify'
import { NextPage } from 'next'
import { IProduct } from 'shopify/types/product'
import { ProductPage } from 'components'
import Error from 'next/error'

interface IProductProps {
  product: IProduct
}

const Product: NextPage<IProductProps> = ({ product }) => {
  if (product) {
    return <ProductPage product={product} />
  }
  return <Error statusCode={404} />
}

Product.getInitialProps = async ({ query }) => {
  const product = await client.product.fetchByHandle(query.uid)
  return { product }
}

export default Product
