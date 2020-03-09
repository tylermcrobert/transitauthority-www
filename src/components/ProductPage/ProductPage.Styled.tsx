import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    width: 100%;
    display: block;
  }
`

const InfoPanel = styled.div`
  min-height: calc(100vh - 1.3rem);
`

const BUTTON_SIZE = 2.25
const BORDER = ` box-shadow: inset 0 0 0 1.5px black;`

const Variant = styled.div<{ isCurrent: boolean }>`
  /* border: 1px solid ${props => props.theme.colors.primary}; */
  width: ${BUTTON_SIZE}rem;
  height: ${BUTTON_SIZE}rem;
  border-radius: ${BUTTON_SIZE / 2}rem;
  ${BORDER}
 

  display: inline-flex;
  justify-content: center;
  align-items: center;

  line-height: 0;
  margin-right: 0.5rem;

  cursor: pointer;
  user-select:none;

  ${props =>
    props.isCurrent &&
    css`
      background: ${props.theme.colors.green};
      color: ${props.theme.colors.secondary};
      box-shadow: none;
    `}
`

const AddToCartButton = styled.div<{ isDisabled: boolean }>`
  height: ${BUTTON_SIZE}rem;
  border-radius: ${BUTTON_SIZE / 2}rem;
  display: inline-block;
  padding: 0 2rem;
  line-height: ${BUTTON_SIZE}rem;
  ${BORDER}

  opacity: ${props => (props.isDisabled ? '0.2' : '1')};
  cursor: pointer;

  &:hover{
    ${props =>
      !props.isDisabled &&
      css`
        background: ${props.theme.colors.primary};
        color: ${props.theme.colors.secondary};
      `}
  }
`

export default {
  Wrapper,
  Variant,
  AddToCartButton,
  InfoPanel,
}
