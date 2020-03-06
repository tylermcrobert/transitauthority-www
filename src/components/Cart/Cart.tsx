import React from 'react'
import useCart from 'hooks/useCart'
import { ICheckoutLineItem } from 'types/shopify'

const Cart = () => {
  const { checkout } = useCart()

  if (checkout) {
    return (
      <div>
        <hr />
        {checkout.lineItems.length ? (
          <div>
            {checkout.lineItems.map(item => (
              <LineItem data={item} />
            ))}
            <a href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
              Checkout
            </a>
          </div>
        ) : (
          'There is nothing in your cart.'
        )}

        <hr />
      </div>
    )
  }
  return <></>
}

const LineItem: React.FC<{ data: ICheckoutLineItem }> = ({ data }) => {
  const { title, variant, quantity } = data

  return (
    <div>
      ({quantity}) {title}
      {variant.title}
      {variant.price}
    </div>
  )
}

export default Cart
