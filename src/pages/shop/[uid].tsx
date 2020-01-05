import React from 'react'
import { client } from 'shopify'
import { NextPage } from 'next'
import { IProduct } from 'shopify/types'

interface IProductProps {
  product: IProduct
}

const Product: NextPage<IProductProps> = ({ product }) => {
  return (
    <div>
      <img
        src={product.images[0].src}
        alt={product.images[0].altText}
        style={{ width: '100%' }}
      />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  )
}

Product.getInitialProps = async ({ query }) => {
  const product = await client.product.fetchByHandle(query.uid)
  return { product }
}

export default Product
