import React, { useState, createContext, useContext } from 'react'
import { IProduct } from 'shopify/types'
import useCart from 'hooks/useCart'
import S from './ProductPage.Styled'

const ProductCtx = createContext<{
  product: IProduct
  currentVariantId: null | string
  setCurrentVariantId: (id: string) => void
}>({
  product: (null as unknown) as IProduct,
  currentVariantId: null,
  setCurrentVariantId: () => null,
})

// TODO: auto-select single variant

const ProductPage: React.FC<{ product: IProduct }> = ({ product }) => {
  const [currentVariantId, setCurrentVariantId] = useState<null | string>(null)

  return (
    <ProductCtx.Provider
      value={{ product, currentVariantId, setCurrentVariantId }}
    >
      <S.Wrapper>
        <div>
          <Information />
          <Variants />
          <AddToCart />
        </div>
        <div>
          <Images />
        </div>
      </S.Wrapper>
    </ProductCtx.Provider>
  )
}

/**
 * Product Information
 */

const Information = () => {
  const {
    product: { title, descriptionHtml },
  } = useContext(ProductCtx)
  return (
    <>
      <h1>{title}</h1>
      <hr />

      <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
      <hr />
    </>
  )
}

/**
 * Variants selector
 */

const Variants = () => {
  const { product, currentVariantId, setCurrentVariantId } = useContext(
    ProductCtx
  )

  return (
    <div>
      {product.variants &&
        product.variants.map(item => (
          <div key={item.title} onClick={() => setCurrentVariantId(item.id)}>
            {item.id === currentVariantId ? '• ' : ''}
            {item.title}
          </div>
        ))}
      <hr />
    </div>
  )
}

/**
 * Add to cart section
 */

const AddToCart: React.FC = () => {
  const { currentVariantId } = useContext(ProductCtx)
  const { addToCart } = useCart()

  const handleCartButton = () => {
    if (currentVariantId) {
      addToCart(currentVariantId)
    }
  }

  return (
    <div>
      <button
        onClick={handleCartButton}
        type="button"
        disabled={!currentVariantId}
      >
        Add to cart
      </button>
    </div>
  )
}

/**
 * Images
 */

const Images = () => {
  const { product } = useContext(ProductCtx)
  return (
    <>
      {product.images.map(({ src, altText }) => (
        <img src={src} key={src} alt={altText} />
      ))}
    </>
  )
}
export default ProductPage
