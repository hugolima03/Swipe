import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Card = styled(motion.div)`
  ${({ theme }) => css`
    width: 90vw;
    max-width: 28.8rem;
    height: 32.7rem;
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.default};

    background-color: white;

    padding: ${theme.spacings.small};
  `}
`
