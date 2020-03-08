import { useContext } from 'react'
import { ProductCtx } from './ProductPage'

const usePrice = () => {
  const {
    product: { variants },
    currentVariant,
  } = useContext(ProductCtx)

  const defaultPrice = variants.reduce((acc, variant) => {
    const amount = parseFloat(variant.price)
    return acc || amount > acc ? amount : acc
  }, 0)

  const price: number = currentVariant
    ? parseFloat(currentVariant.price)
    : defaultPrice

  return `$${price.toFixed(2)}`
}

export default usePrice
