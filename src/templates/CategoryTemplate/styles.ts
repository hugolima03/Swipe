import { CategoryInfo } from 'components/CategorySliderItem/styles'
import styled, { css } from 'styled-components'

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;

    ${CategoryInfo} {
      border-radius: 0;

      p {
        font-size: calc(${theme.font.sizes.medium} * 2);
      }
    }

    #close {
      position: absolute;

      top: 1.6rem;
      right: 1.6rem;
      background-color: rgba(1, 1, 1, 0.6);

      svg {
        height: 2.4rem;
        fill: white;
      }
    }
  `}
`
export const CategoryImage = styled.div`
  width: 100vw;

  height: 26rem;
  background: url('https://source.unsplash.com/user/willianjusten/1042x580');
  background-size: contain;
`

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 ${theme.spacings.xsmall};
    overflow: auto;
  `}
`
