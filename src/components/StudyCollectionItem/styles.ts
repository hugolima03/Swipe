import styled, { css } from 'styled-components'

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.4rem;
    background-color: ${theme.colors.green};
    padding: calc(${theme.spacings.xxsmall} / 2);

    svg {
      height: 3.4rem;
      fill: white;
    }
  `}
`

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    background-color: white;
    border: none;
    outline: none;
    font-family: ${theme.font.family};
    text-align: start;
    color: ${theme.colors.black};
    text-decoration: none;

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
      border-top: 1px solid rgb(241 245 249);
    }

    &:visited {
      text-decoration: none;
    }
  `}
`
