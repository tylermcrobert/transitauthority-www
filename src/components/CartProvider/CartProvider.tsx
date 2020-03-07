import React, { createContext, useState, useEffect } from 'react'
import { client } from 'shopify'
import Cookie from 'js-cookie'
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
    const checkoutId = Cookie.get('shopifyCheckoutId')

    if (checkoutId) {
      client.checkout.fetch(checkoutId).then((ckData: ICheckout) => {
        setCheckout(ckData)
      })
    } else {
      client.checkout.create().then((data: ICheckout) => {
        setCheckout(data)
        Cookie.set('shopifyCheckoutId', data.id)
      })
    }
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
