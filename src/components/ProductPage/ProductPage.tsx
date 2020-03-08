import React, { useState, createContext, useContext } from 'react'
import { IProduct } from 'shopify/types'
import useCart from 'hooks/useCart'
import { client } from 'shopify'
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

//  https://github.com/tylermcrobert/hightide-www/blob/storefront/src/templates/Product/index.js#L18
// https://shopify.github.io/js-buy-sdk/ProductHelpers.html

const Variants = () => {
  const { product, setCurrentVariantId } = useContext(ProductCtx)

  const initialState = product.options.reduce((acc, cur) => {
    const val = cur.values.length > 1 ? null : cur.values[0].value
    return { [cur.name]: val, ...acc }
  }, {} as any)

  const [currentOptions, setCurrentOptions] = useState(initialState)

  const handleClick = (value: string, optionName: string) => {
    const updatedState = { ...currentOptions, [optionName]: value }
    setCurrentOptions(updatedState)

    const variant = client.product.helpers.variantForOptions(
      product,
      updatedState
    )

    setCurrentVariantId(variant.id)
  }

  return (
    <div>
      {product.options.map(option => (
        <div key={option.name}>
          <br />
          <h3>{option.name}</h3>

          {option.values.map(({ value }) => {
            const isCurrent = currentOptions[option.name] === value
            return (
              <div key={value} onClick={() => handleClick(value, option.name)}>
                {isCurrent ? '• ' : ''}
                {value}
              </div>
            )
          })}
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
