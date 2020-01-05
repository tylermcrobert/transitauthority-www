import React from 'react'
import Link from 'next/link'
import Styled from './Styled'

const Nav = () => (
  <Styled.Nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/shop">
      <a>Shop</a>
    </Link>
  </Styled.Nav>
)

export default Nav
