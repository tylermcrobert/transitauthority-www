import styled from 'styled-components'

const Nav = styled.nav`
  position: sticky;
  top: 0px;

  background: white;
  width: 100%;

  display: flex;
  padding: ${props => props.theme.margins.standard};

  > * :first-child {
    flex: 1;
  }
`

const NumberWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.primary};
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export default { Nav, NumberWrapper }
