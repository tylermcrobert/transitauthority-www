import 'styled-components'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Sizes = {
  [item in Size]: number
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme {
    scale: number[]
    remScale: string[]

    fontFamilies: {
      sansSerif: string
      serif: string
    }

    colors: {
      primary: string
      secondary: string
    }

    margins: {
      standard: string
      gutter: string
      large: string
    }

    lineHeights: {
      body: number
      heading: number
    }

    sizes: Sizes
  }
}
