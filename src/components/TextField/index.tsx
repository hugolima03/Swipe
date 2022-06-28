import { ChangeEvent, InputHTMLAttributes } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
  error?: string
  labelFor?: string
  disabled?: boolean
  initialValue?: string
  icon?: React.ReactNode
  onInputChange?: (value: string) => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

const TextField = ({
  label,
  labelFor,
  icon,
  onInputChange,
  initialValue,
  ...props
}: TextFieldProps) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (onInputChange) onInputChange(e.target.value)
  }

  return (
    <>
      <S.Label htmlFor={labelFor}>{label}</S.Label>
      <S.Wrapper>
        <S.Input
          id={labelFor}
          spellCheck={false}
          hasIcon={!!icon}
          onChange={handleChange}
          defaultValue={initialValue}
          {...props}
        />
        <S.IconWrapper>{icon}</S.IconWrapper>
      </S.Wrapper>
    </>
  )
}

export default TextField
