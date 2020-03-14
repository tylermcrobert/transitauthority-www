import React from 'react'
import Link from 'next/link'
import useCart from 'hooks/useCart'
import { Cart } from 'components'
import { UNICODE } from '../../constants'
import S from './Nav.Styled'

// TODO: add cookie for dark mode
const useToggleTheme = () => {
  let isToggled = true

  const toggleTheme = () => {
    const root = document.documentElement
    root.style.setProperty('--bg-color', isToggled ? 'black' : 'white')
    root.style.setProperty('--text-color', isToggled ? 'white' : 'black')
    isToggled = !isToggled
  }

  return toggleTheme
}

const Nav = () => {
  const { checkout, openCart } = useCart()
  const toggleTheme = useToggleTheme()

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
        <div onClick={toggleTheme}>{UNICODE.circle}</div>
      </S.Nav>
      <Cart />
    </>
  )
}
export default Nav
