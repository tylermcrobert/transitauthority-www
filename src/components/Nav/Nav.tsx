import React from 'react'
import Link from 'next/link'
import useCart from 'hooks/useCart'
import Styled from './Nav.Styled'

const Nav = () => {
  const { checkout } = useCart()

  return (
    <Styled.Nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/shop">
        <a>Shop</a>
      </Link>
      &nbsp;&nbsp;
      <div>Cart {checkout ? `(${checkout.lineItems.length})` : null}</div>
    </Styled.Nav>
  )
}
export default Nav
