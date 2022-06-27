import { lighten } from 'polished'

import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    border: none;
    color: white;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.primary};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    cursor: pointer;

    box-shadow: ${theme.shadows.default};

    transition: ${theme.transition.fast};

    &:hover {
      background-color: ${lighten(0.1, theme.colors.primary)};
    }

    &:disabled {
      outline: black;
      background-color: white;
      color: ${theme.colors.lightGray};
    }
  `}
`
