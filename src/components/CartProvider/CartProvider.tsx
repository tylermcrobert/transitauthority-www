import React, { createContext } from 'react'

export const CartCtx = createContext<{
  addToCart: (id: string) => null
}>({
  addToCart: () => null,
})

const CartProvider: React.FC = ({ children }) => {
  const addToCart = (id: string): null => {
    console.log({ id })
    return null
  }

  return <CartCtx.Provider value={{ addToCart }}>{children}</CartCtx.Provider>
}

export default CartProvider
