import { lighten } from 'polished'

import styled, { css, DefaultTheme } from 'styled-components'

type ButtonProps = {
  backgroundColor?: 'blue' | 'green'
  styleType: 'default' | 'outline' | 'minimal'
}

const backgrounds = {
  blue: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.blue};
  `,
  green: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};
  `
}

const buttonModifiers = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,

  outline: (theme: DefaultTheme) => css`
    background-color: white;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};

    &:hover {
      background-color: white;
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    border: none;
    background-color: white;
    color: ${theme.colors.primary};

    &:hover {
      background-color: white;
    }
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, backgroundColor, styleType }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 3.6rem;

    font-family: ${theme.font.family};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    min-width: 6.7rem;
    border: none;
    color: white;
    border-radius: ${theme.border.radius};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    cursor: pointer;

    box-shadow: ${theme.shadows.default};

    transition: ${theme.transition.fast};

    position: relative;

    &:hover {
      background-color: ${lighten(0.1, theme.colors.primary)};
    }

    &:disabled {
      outline: black;
      background-color: white;
      color: ${theme.colors.lightGray};
      cursor: not-allowed;
    }

    ${backgroundColor && backgrounds[backgroundColor](theme)}

    ${buttonModifiers[styleType](theme)}
  `}
`
