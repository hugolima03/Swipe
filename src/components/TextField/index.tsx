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
    <S.Input id={labelFor} {...props} />
    {icon}
  </>
)

export default TextField
