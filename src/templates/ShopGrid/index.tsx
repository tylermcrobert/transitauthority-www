import React from 'react'
import { IProduct } from 'shopify/types/product'
import Link from 'next/link'
import Styled from './Styled'

interface IShopGridProps {
  products: IProduct[]
}

const ShopGrid: React.FC<IShopGridProps> = ({ products }) => {
  return (
    <div>
      <h1>Shop</h1>
      <Styled.GridWrapper>
        {products.map(item => (
          <Link href="/shop/[uid]" as={`/shop/${item.handle}`} key={item.id}>
            <a>
              <img
                src={item.images[0].src}
                alt={item.images[0].altText}
                style={{ width: '100%' }}
              />
              <h2>{item.title}</h2>
            </a>
          </Link>
        ))}
      </Styled.GridWrapper>
    </div>
  )
}

export default ShopGrid
