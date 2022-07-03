import styled, { css } from 'styled-components'

import Image from 'next/image'

export const Wrapper = styled.div`
  display: flex;
  width: fit-content;

  position: relative;
`

export const CategoryImage = styled(Image)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
  `}
`

export const CategoryInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    border-radius: 0 0 2.4rem 2.4rem;

    background: rgba(0, 0, 0, 0.35);
    padding: ${theme.spacings.xsmall};

    p {
      color: white;
      font-size: 2.4rem;
      font-weight: ${theme.font.bold};
    }
  `}
`
