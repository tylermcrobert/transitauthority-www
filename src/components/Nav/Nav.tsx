import React from 'react'
import Link from 'next/link'
import useCart from 'hooks/useCart'
import { Cart } from 'components'
import { UNICODE } from '../../constants'
import S from './Nav.Styled'

const Nav = () => {
  const { checkout, openCart } = useCart()

  const checkoutAmount = checkout
    ? checkout.lineItems.reduce((acc, lineItem) => acc + lineItem.quantity, 0)
    : null

  return (
    <>
      <S.Nav>
        <Link href="/">
          <a>{UNICODE.circle} TRANSIT AUTHORTIY</a>
        </Link>
        &nbsp;&nbsp;
        <S.NumberWrapper onClick={openCart}>
          {checkoutAmount ? `${checkoutAmount}` : 0}
        </S.NumberWrapper>
        &nbsp;
        {UNICODE.circle}
      </S.Nav>
      <Cart />
    </>
  )
}
export default Nav
