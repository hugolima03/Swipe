import Button from 'components/Button'
import Logo from 'components/Logo'
import Menu from 'components/Menu'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  ArrowBack,
  Menu as MenuIcon,
  Notifications
} from 'styled-icons/material-rounded'
import * as S from './styles'

type HeaderProps = {
  enableMenu?: boolean
  enableArrowBack?: boolean
}

const Header = ({
  enableMenu = true,
  enableArrowBack = false
}: HeaderProps) => {
  const { back } = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <S.Wrapper>
        {enableArrowBack && (
          <Button styleType="icon" onClick={() => back()}>
            <ArrowBack aria-label="open-menu" />
          </Button>
        )}

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
