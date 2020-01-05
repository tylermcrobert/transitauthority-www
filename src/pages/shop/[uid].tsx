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
      {product.images.map(item => (
        <img src={item.src} alt={item.altText} style={{ width: '100%' }} />
      ))}
      <h1>{product.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </div>
  )
}

Product.getInitialProps = async ({ query }) => {
  const product = await client.product.fetchByHandle(query.uid)
  return { product }
}

export default Product
