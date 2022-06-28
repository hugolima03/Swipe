import styled, { css } from 'styled-components'

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};

    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`

export const Input = styled.input`
  ${({ theme, disabled }) => css`
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
  `}
`
