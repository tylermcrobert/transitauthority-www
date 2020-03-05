import React, { createContext } from 'react'

export const CartCtx = createContext<{
  addToCart: () => void
}>({
  addToCart: () => null,
})

const CartProvider = ({ children }) => {
  const addToCart = () => {
    console.log('add to cart')

    return null
  }

  return <CartCtx.Provider value={{ addToCart }}>{children}</CartCtx.Provider>
}

export default CartProvider
