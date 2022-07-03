import { Button } from 'components/Button/styles'
import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    ${Button} {
      top: 1.6rem;
      right: 1.6rem;
      min-width: auto;
      padding: 0.8rem;
      position: absolute;
      border: none;
      box-shadow: none;

      svg {
        height: 2.4rem;
        fill: ${theme.colors.black};
      }
    }
  `}
`

type MenuLinkProps = {
  active?: boolean
}

const MenuLinkModifiers = {
  active: (theme: DefaultTheme) => css`
    &::before {
      content: '';
      position: absolute;
      top: 100%;
      width: 100%;
      left: 0;
      height: 5px;
      background: ${theme.gradients.blue};
    }
  `
}

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ theme, active }) => css`
    font-size: calc(2 * ${theme.font.sizes.xsmall});
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    text-decoration: none;
    position: relative;

    &:visited {
      color: ${theme.colors.black};
    }

    ${active && MenuLinkModifiers.active(theme)}
  `}
`

export const LinksWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`
