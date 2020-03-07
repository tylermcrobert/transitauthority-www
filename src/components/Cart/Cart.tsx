import React from 'react'
import useCart from 'hooks/useCart'
import { ICheckoutLineItem } from 'types/shopify'
import S from './Cart.Styled'

//  TODO: Add close
// TODO: add + and -

const Cart = () => {
  const { checkout, isCartOpen, closeCart } = useCart()

  if (checkout && isCartOpen) {
    return (
      <S.Cart>
        <hr />
        {checkout.lineItems.length ? (
          <div>
            <br />
            <h1>
              Your Cart <span onClick={closeCart}>(✕)</span>
            </h1>
            <br />
            <hr />
            {checkout.lineItems.map(item => (
              <LineItem data={item} key={item.id} />
            ))}
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
      <h3>( - ) {quantity} ( + )</h3>
      <h4>
        {variant.title} • ${parseFloat(variant.price) * quantity} • Remove
      </h4>
      <hr />
    </div>
  )
}

export default Cart
