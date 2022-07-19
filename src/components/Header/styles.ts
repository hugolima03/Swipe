import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 6.5rem;

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: ${theme.layers.header};

    position: sticky;
    top: 0;

    background-color: white;

    svg {
      height: 2.4rem;
    }
  `}
`
