import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: min-content auto min-content;
`

export const ImageWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 21.1rem;
  position: relative;
`

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.medium} * 2);
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    background-color: ${theme.colors.green};
  `}
`

export const FooterInfo = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;

    color: white;
    font-weight: ${theme.font.bold};

    p {
      font-size: ${theme.font.sizes.medium};
    }

    strong {
      font-size: calc(${theme.font.sizes.medium} * 2);
    }
  `}
`
