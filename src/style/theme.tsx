import { DefaultTheme } from "styled-components"
import modularScale from "./modularScale"

const scale: number[] = modularScale({ scale: 1.333, stepsDown: 2, length: 15 })

const remScale: string[] = scale.map(item => `${item}rem`)

const theme: DefaultTheme = {
  scale,
  remScale,

  colors: {
    primary: "#000000",
    secondary: "#ffffff",
  },

  fontFamilies: {
    sansSerif: `Suisse, helvetica, arial, sans-serif`,
    serif: `"SouvenirStd-light"`,
  },

  lineHeights: {
    body: 1.2,
    heading: 1.05,
  },

  margins: {
    standard: remScale[3],
    gutter: remScale[3],
    large: remScale[8],
  },

  sizes: {
    xl: 1900,
    lg: 1440,
    md: 1024,
    sm: 768,
    xs: 576,
  },
}

export default theme
