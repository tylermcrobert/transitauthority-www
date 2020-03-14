import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'
import { mq } from './index'

const style = css`
  :root {
    --bg-color: white;
    --text-color: black;
  }

  @font-face {
    font-family: 'Self Modern';
    src: url('/fonts/self-modern_regular.woff2');
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body,
  html {
    line-height: ${props => props.theme.lineHeights.body};
    font-family: ${props => props.theme.fontFamilies.sansSerif};
    letter-spacing: 0.02em;
    color: var(--text-color);
    background: var(--bg-color);
    font-size: 18px;
    overscroll-behavior-y: none;

    @media ${mq.xs} {
      font-size: 19px;
    }
    @media ${mq.sm} {
      font-size: 20px;
    }
    @media ${mq.md} {
      font-size: 21px;
    }
    @media ${mq.lg} {
      font-size: 1.3vw;
    }
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  em {
    font-style: italic;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${props => props.theme.lineHeights.heading};
  }

  img,
  video {
    display: block;
    width: 100%;
  }
`
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
`

export default GlobalStyle
