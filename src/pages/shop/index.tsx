import React from 'react'
import { client } from 'shopify'
import { NextPage } from 'next'
import { IProduct } from 'shopify/types'

interface IShop {
  products: IProduct[]
}

const Shop: NextPage<IShop> = ({ products }) => {
  if (products) {
    return (
      <div>
        <h1>Shop</h1>
        <div>
          {products.map((item: IProduct) => {
            console.log(item.title)
            return <div>item</div>
          })}
          {/* {collection.products.map(item => {
            const variant = item.variants[0]
            const img = variant.image.src

            return (
              <div key={item.title}>
                <div>
                  <img src={img} alt={item.title} style={{ width: '100%' }} />
                </div>
                {item.title}
              </div>
            )
          })} */}
        </div>
      </div>
    )
  }
  return <div>Collection not found</div>
}

Shop.getInitialProps = async () => {
  const products = await client.product.fetchAll()
  return { products }
}

export default Shop
