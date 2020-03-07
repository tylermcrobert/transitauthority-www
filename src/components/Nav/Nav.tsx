import React from 'react'
import Link from 'next/link'
import useCart from 'hooks/useCart'
import { Cart } from 'components'
import Styled from './Nav.Styled'

const Nav = () => {
  const { checkout, openCart } = useCart()

  return (
    <>
      <Styled.Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/shop">
          <a>Shop</a>
        </Link>
        &nbsp;&nbsp;
        <div onClick={openCart}>
          Cart {checkout ? `(${checkout.lineItems.length})` : null}
        </div>
      </Styled.Nav>
      <Cart />
    </>
  )
}
export default Nav
