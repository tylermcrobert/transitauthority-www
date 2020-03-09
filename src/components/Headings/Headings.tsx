import styled from 'styled-components'

const LargeHead = styled.h1<{ as: string; isSerif?: boolean }>`
  font-size: 5vw;
  font-family: ${props => props.isSerif && props.theme.fontFamilies.serif};
  letter-spacing: -0.02em;
`

export { LargeHead }
