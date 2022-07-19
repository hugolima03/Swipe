import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};

    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`

type InputProps = {
  hasIcon: boolean
}

export const Input = styled.input<InputProps>`
  ${({ theme, hasIcon }) => css`
    display: flex;

    outline: none;

    font-weight: 400;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family};

    height: 3.8rem;
    background-color: white;
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.lightGray};

    padding: 0 ${theme.spacings.xsmall};

    ${hasIcon &&
    css`
      padding-right: calc(${theme.spacings.xsmall} + 2.6rem);
    `}

    transition: ${theme.transition.fast};

    &:hover {
      border: 0.1rem solid ${theme.colors.gray};
    }

    &:focus {
      border: 0.2rem solid ${theme.colors.gray};
    }

    &:disabled {
      cursor: not-allowed;
      border: 0.1rem solid ${theme.colors.gray};
      background-color: ${theme.colors.disabled};
    }

    &::placeholder {
      color: ${lighten(0.4, theme.colors.gray)};
    }
  `}
`

export const IconWrapper = styled.span`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    top: 50%;
    right: 1.6rem;
    transform: translateY(-50%);

    svg {
      height: 2.6rem;
      fill: ${theme.colors.gray};
    }
  `}
`
