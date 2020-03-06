import React, { createContext, useState, useEffect } from 'react'
import { client } from 'shopify'
import { ICheckout } from '../../types/shopify'

export const CartCtx = createContext<{
  addToCart: (id: string) => null
  checkout: ICheckout | null
}>({
  addToCart: () => null,
  checkout: null,
})

/**
 * Cart functions
 */

const addToCart = (id: string): null => {
  console.log({ id })
  return null
}

/**
 * Setup checkout
 */

const useCheckout = () => {
  const [checkout, setCheckout] = useState<ICheckout | null>(null)

  useEffect(() => {
    client.checkout.create().then((data: ICheckout) => {
      setCheckout(data)
    })
  }, [])

  return checkout
}

/**
 * Provider
 */

const CartProvider: React.FC = ({ children }) => {
  const checkout = useCheckout()

  return (
    <CartCtx.Provider value={{ addToCart, checkout }}>
      {children}
    </CartCtx.Provider>
  )
}
export default CartProvider
