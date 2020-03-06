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
 * Setup checkout
 */

const useCheckout = () => {
  const [checkout, setCheckout] = useState<ICheckout | null>(null)

  useEffect(() => {
    client.checkout.create().then((data: ICheckout) => {
      setCheckout(data)
    })
  }, [])

  return { checkout, setCheckout }
}

/**
 * Provider
 */

const CartProvider: React.FC = ({ children }) => {
  const { checkout, setCheckout } = useCheckout()

  /**
   * Add to cart
   */

  const addToCart = (variantId: string): null => {
    if (checkout) {
      client.checkout
        .addLineItems(checkout.id, [
          {
            variantId,
            quantity: 1,
          },
        ])
        .then((newCheckout: ICheckout) => {
          setCheckout(newCheckout)
        })
    }
    return null
  }

  return (
    <CartCtx.Provider
      value={{
        addToCart,
        checkout,
      }}
    >
      {children}
    </CartCtx.Provider>
  )
}
export default CartProvider
