import { useContext } from 'react'
import { CartCtx } from 'components/CartProvider/CartProvider'

const useCart = () => useContext(CartCtx)

export default useCart
