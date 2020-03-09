import styled from 'styled-components'

const LargeHead = styled.h1<{ as: string; isSerif?: boolean }>`
  font-size: 6vw;
  font-family: ${props => props.isSerif && props.theme.fontFamilies.serif};
`

export { LargeHead }
