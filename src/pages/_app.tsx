import Layout from 'components/Layout'
import { CartProvider } from 'components'

const MyApp: React.FC<{
  Component: any
  pageProps: any
}> = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
