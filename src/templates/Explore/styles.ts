import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: calc(2 * ${theme.font.sizes.medium});
    color: ${theme.colors.black};
    padding: 0 ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    /* margin-top: ${theme.spacings.medium}; */
    padding: 0 ${theme.spacings.xsmall};
    color: ${theme.colors.black};
  `}
`

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding: 0 ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const CollectionsWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    overflow: auto;
  `}
`
