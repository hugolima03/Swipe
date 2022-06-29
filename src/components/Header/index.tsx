import Logo from 'components/Logo'
import { Menu, Notifications } from 'styled-icons/material-rounded'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Menu />
    <Logo />
    <Notifications />
  </S.Wrapper>
)

export default Header
