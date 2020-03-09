import styled from 'styled-components'

const Nav = styled.nav`
  position: sticky;
  top: 0px;

  background: white;
  width: 100%;

  display: flex;

  > * :first-child {
    flex: 1;
  }
`

export default { Nav }