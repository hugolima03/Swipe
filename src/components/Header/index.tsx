import Button from 'components/Button'
import Logo from 'components/Logo'
import Menu from 'components/Menu'
import { useState } from 'react'
import { Menu as MenuIcon, Notifications } from 'styled-icons/material-rounded'
import * as S from './styles'

type HeaderProps = {
  enableMenu?: boolean
}

const Header = ({ enableMenu = true }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <S.Wrapper>
        {enableMenu && (
          <Button styleType="icon" onClick={() => setIsMenuOpen(true)}>
            <MenuIcon aria-label="open-menu" />
          </Button>
        )}
        <Logo />
        <Button styleType="icon" style={{ gridArea: 'right' }}>
          <Notifications />
        </Button>
      </S.Wrapper>

      {isMenuOpen && <Menu setOpen={setIsMenuOpen} />}
    </>
  )
}

export default Header
