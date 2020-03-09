// import reset from 'styled-reset'
import { createGlobalStyle, css } from 'styled-components'

const temp = css`
  body,
  html {
    font-size: 20px;
  }

  * {
    margin: 0;
    padding: 0;
    font-weight: 400;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.074em;
  }
  h2 {
    font-size: 1.728em;
  }
  h3 {
    font-size: 1.44em;
  }
  h4 {
    font-size: 1.2em;
  }
  h5 {
    font-size: 1em;
  }
  h6 {
    font-size: 0.833em;
  }
`

const GlobalStyle = createGlobalStyle`
  ${temp}
`

export default GlobalStyle
