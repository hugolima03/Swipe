import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    position: relative;

    .close {
      position: absolute;
      top: ${theme.spacings.small};
      right: ${theme.spacings.small};
      z-index: ${theme.layers.alwaysOnTop};
    }
  `}
`

export const ProgressBar = styled(motion.div)`
  ${({ theme }) => css`
    height: 0.4rem;
    background-color: ${theme.colors.green};
    transition: all 0.2s;

    position: absolute;
    top: 0;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`
