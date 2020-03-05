import React from 'react'
import { IProduct } from 'shopify/types'
import useCart from 'hooks/useCart'
import S from './ProductPage.Styled'

const ProductPage: React.FC<{ product: IProduct }> = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <S.Wrapper>
      <div>
        {product.images.map(item => (
          <img src={item.src} key={item.src} alt={item.altText} />
        ))}
      </div>
      <div>
        <h1>{product.title}</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        <hr />
        <button onClick={addToCart} type="button">
          Add to cart
        </button>
      </div>
    </S.Wrapper>
  )
}

export default ProductPage
