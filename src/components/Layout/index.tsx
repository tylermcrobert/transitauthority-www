import React from 'react'
import Nav from 'components/Nav'
import GlobalStyle from 'style/GlobalStyle'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      {children}
    </div>
  )
}

export default Layout
