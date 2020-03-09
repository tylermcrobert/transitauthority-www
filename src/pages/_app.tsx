import Layout from 'components/Layout'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from 'components'
import theme from 'style/theme'

const MyApp: React.FC<{
  Component: any
  pageProps: any
}> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp
