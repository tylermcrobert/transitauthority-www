import React from 'react'
import { client } from 'shopify'
import { NextPage } from 'next'
import { IProduct } from 'shopify/types'
import Link from 'next/link'

interface IShop {
  products: IProduct[]
}

const Shop: NextPage<IShop> = ({ products }) => {
  if (products) {
    return (
      <div>
        <h1>Shop</h1>
        <div>
          {products.map(item => (
            <Link href="/shop/[uid]" as={`/shop/${item.handle}`} key={item.id}>
              <a>
                <img
                  src={item.images[0].src}
                  alt={item.images[0].altText}
                  style={{ width: '100%' }}
                />
                <h2>{item.title}</h2>
                <div>{item.description}</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    )
  }
  return <div>Products not found</div>
}

Shop.getInitialProps = async () => {
  const products = await client.product.fetchAll()
  return { products }
}

export default Shop
