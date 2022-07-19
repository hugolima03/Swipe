import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 6rem;

    gap: 7rem;

    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.tabNavigator};

    border-radius: 1.6rem 1.6rem 0 0;

    position: sticky;
    bottom: 0;
  `}
`

export const TabLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};

    text-decoration: none;

    svg {
      height: 2.4rem;
      fill: ${theme.colors.black};
    }
  `}
`

export const HomeLink = styled.a`
  ${({ theme }) => css`
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 6.6rem;
    height: 6.6rem;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);

    background: ${theme.gradients.blue};

    text-decoration: none;

    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};
    color: white;

    svg {
      height: 2.4rem;
      fill: white;
    }
  `}
`
