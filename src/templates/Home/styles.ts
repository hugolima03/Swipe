import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const NoStudies = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    height: 100%;
    align-items: center;
    justify-content: center;

    max-width: 20rem;
    margin: auto;

    gap: ${theme.spacings.xsmall};

    p {
      text-align: center;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
