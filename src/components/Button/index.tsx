import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>
// | AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = {
  children: React.ReactNode
} & ButtonTypes

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Button {...props}>{children}</S.Button>
)

export default Button
