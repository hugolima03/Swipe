import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: calc(2 * ${theme.font.sizes.medium});
    color: ${theme.colors.black};
    padding: 0 ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.xsmall};
    color: ${theme.colors.black};
  `}
`
