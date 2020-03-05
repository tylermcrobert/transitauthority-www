import React from 'react'
import { IProduct } from 'shopify/types'
import S from './ProductPage.Styled'

const ProductPage: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <S.Wrapper>
      <div>
        {product.images.map(item => (
          <img src={item.src} alt={item.altText} />
        ))}
      </div>
      <div>
        <h1>{product.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </div>
    </S.Wrapper>
  )
}

export default ProductPage
