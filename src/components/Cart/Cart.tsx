import React from 'react'
import useCart from 'hooks/useCart'
import { ICheckoutLineItem } from 'types/shopify'
import S from './Cart.Styled'

//  TODO: Add close
// TODO: add + and -

const Cart = () => {
  const { checkout } = useCart()

  if (checkout) {
    return (
      <S.Cart>
        <hr />
        {checkout.lineItems.length ? (
          <div>
            <br />
            <h1>Your Cart</h1>
            <hr />
            {checkout.lineItems.map(item => (
              <LineItem data={item} key={item.id} />
            ))}
            <br />
            <br />
            <h2>TOTAL: ${checkout.paymentDue}</h2>
            <a href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
              Checkout
            </a>
            <br />
            <br />
          </div>
        ) : (
          'There is nothing in your cart.'
        )}

        <hr />
      </S.Cart>
    )
  }
  return <></>
}

const LineItem: React.FC<{ data: ICheckoutLineItem }> = ({ data }) => {
  const { title, variant, quantity } = data

  return (
    <div>
      <h2>{title}</h2>
      <h4>
        {variant.title} • {variant.price} • (x{quantity})
      </h4>
      <hr />
    </div>
  )
}

export default Cart
