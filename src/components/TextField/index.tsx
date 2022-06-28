import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
  error?: string
  labelFor?: string
  disabled?: boolean
  initialValue?: string
  icon?: React.ReactNode
  onInputChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ label, labelFor, icon, ...props }: TextFieldProps) => (
  <>
    <S.Label htmlFor={labelFor}>{label}</S.Label>
    <S.Wrapper>
      <S.Input id={labelFor} spellCheck={false} hasIcon={!!icon} {...props} />
      <S.IconWrapper>{icon}</S.IconWrapper>
    </S.Wrapper>
  </>
)

export default TextField
