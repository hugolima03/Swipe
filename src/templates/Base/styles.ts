import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  /* Safari 11+ */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      height: -webkit-fill-available;
    }
  }
  /* Test website on real Safari 11+ */

  /* Safari 10.1 */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (not (stroke-color: transparent)) {
      height: -webkit-fill-available;
    }
  }

  /* Safari 6.1-10.0 (but not 10.1) */
  @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
    height: -webkit-fill-available;
  }
`

export const Content = styled.main`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;

    overflow: auto;

    /* background-color: ${theme.colors.mainBg}; */
  `}
`
