import React from 'react'
import { client } from 'shopify'
import { NextPage } from 'next'
import { IProduct } from 'shopify/types'
import ShopGrid from 'templates/ShopGrid'

interface IShop {
  products: IProduct[]
}

const Shop: NextPage<IShop> = ({ products }) => {
  return products ? (
    <>
      <ShopGrid products={products} />
    </>
  ) : (
    <div>Products not found</div>
  )
}

Shop.getInitialProps = async () => {
  const products = await client.product.fetchAll()

  return { products }
}

export default Shop
