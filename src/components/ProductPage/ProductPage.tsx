import React, { useState, useEffect } from 'react'
import { IProduct } from 'shopify/types'
import useCart from 'hooks/useCart'
import S from './ProductPage.Styled'

type ErrorCode = 'NOVARIANT'

const ProductPage: React.FC<{ product: IProduct }> = ({ product }) => {
  const { images, title, descriptionHtml, variants } = product
  const [currentVariantId, setCurrentVariantId] = useState<null | string>(null)
  const [errorCode, setErrorCode] = useState<null | ErrorCode>(null)
  const { addToCart } = useCart()

  const handleCartButton = () => {
    if (currentVariantId) {
      addToCart(currentVariantId)
    } else {
      setErrorCode('NOVARIANT')
    }
  }

  useEffect(() => {
    if (currentVariantId) {
      setErrorCode(null)
    }
  }, [currentVariantId])

  return (
    <S.Wrapper>
      <div>
        {images.map(item => (
          <img src={item.src} key={item.src} alt={item.altText} />
        ))}
      </div>
      <div>
        <h1>{title}</h1>
        <hr />

        <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        <hr />

        {variants &&
          variants.map(item => (
            <div key={item.title} onClick={() => setCurrentVariantId(item.id)}>
              {item.id === currentVariantId ? '• ' : ''}
              {item.title}
            </div>
          ))}
        <hr />

        {errorCode && errorCode === 'NOVARIANT' && (
          <div>Please choose a variant</div>
        )}

        <button onClick={handleCartButton} type="button">
          Add to cart
        </button>
      </div>
    </S.Wrapper>
  )
}

export default ProductPage
