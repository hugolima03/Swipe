import styled, { css } from 'styled-components'

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 4rem;
    border-radius: 0.4rem;
    background-color: ${theme.colors.green};

    svg {
      height: 3.4rem;
      fill: white;
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    padding: ${theme.spacings.xsmall} 0;

    gap: ${theme.spacings.xxsmall};

    cursor: pointer;

    strong {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
    }

    span {
      display: flex;
      flex-direction: column;
    }

    p {
      font-size: ${theme.font.sizes.small};
      font-weight: 400;
      color: ${theme.colors.gray};
    }

    & + & {
      border-top: 1px solid ${theme.colors.lightGray};
    }
  `}
`
