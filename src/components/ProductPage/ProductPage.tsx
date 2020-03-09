import React, { useState, useEffect, createContext, useContext } from 'react'
import { IProduct } from 'shopify/types'
import useCart from 'hooks/useCart'
import { client } from 'shopify'
import { LargeHead } from 'components'
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

// TODO: Add greyed out for sold out
// TODO: Add previous price

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
      <LargeHead as="h1">{title}</LargeHead>
      <LargeHead as="h3">White on navy blue</LargeHead>
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
  const { product, setCurrentVariantId } = useContext(ProductCtx)

  // state setup
  const initialState = product.options.reduce((acc, cur) => {
    const val = cur.values.length > 1 ? null : cur.values[0].value
    return { [cur.name]: val, ...acc }
  }, {} as any)

  const [currentOptions, setCurrentOptions] = useState(initialState)

  // handle option click
  const handleClick = (value: string, optionName: string) => {
    setCurrentOptions({ ...currentOptions, [optionName]: value })
  }

  // sync variant with state
  useEffect(() => {
    const variant = client.product.helpers.variantForOptions(
      product,
      currentOptions
    )

    if (variant) {
      setCurrentVariantId(variant.id)
    }
  }, [currentOptions])

  const multipleOptions = product.options.filter(item => item.values.length > 1)

  return (
    <>
      {multipleOptions.map(option => (
        <div key={option.name}>
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
    </>
  )
}

/**
 * Add to cart section
 */

const AddToCart: React.FC = () => {
  const { currentVariantId, product } = useContext(ProductCtx)
  const { addToCart } = useCart()

  const currentProduct =
    currentVariantId && product.variants
      ? product.variants.filter(item => item.id === currentVariantId)[0]
      : null

  const isSoldOut: boolean = currentProduct ? !currentProduct.available : false

  const handleCartButton = () => {
    if (currentVariantId) {
      addToCart(currentVariantId)
    }
  }

  return (
    <div>
      <button
        onClick={isSoldOut ? () => null : handleCartButton}
        type="button"
        disabled={!currentVariantId}
      >
        {!isSoldOut ? 'Add to cart' : 'Sold Out'}
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
