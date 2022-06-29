import styled, { css } from 'styled-components'

type SVGProps = {
  color: 'black' | 'white' | 'pink'
}

export const SVG = styled.svg<SVGProps>`
  ${({ theme, color }) => css`
    fill: ${theme.colors[color]};
  `}
`
