// import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body,html{
    font-size:17px;
  }
 * {
   margin: 0;
   padding: 0;
   font-weight: 400;
   letter-spacing: -.03em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }

 
`

export default GlobalStyle
