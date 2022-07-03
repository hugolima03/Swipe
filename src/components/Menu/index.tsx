import Button from 'components/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { Close } from 'styled-icons/material-rounded'
import * as S from './styles'

type MenuProps = {
  onClose?: () => void
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Menu = ({ onClose, setOpen }: MenuProps) => {
  const { pathname } = useRouter()

  const links = {
    home: {
      label: 'Home',
      pathname: '/'
    },
    explore: {
      label: 'Explore',
      pathname: '/explore'
    },
    settings: {
      label: 'Settings',
      pathname: '/settings'
    },
    profile: {
      label: 'Profile',
      pathname: '/profile'
    }
  }

  function handleOnClose() {
    setOpen(false)
    if (onClose) onClose()
  }

  return (
    <S.Wrapper>
      <Button styleType="minimal" onClick={handleOnClose}>
        <Close />
      </Button>

      <S.LinksWrapper>
        <Link href="" passHref>
          <S.MenuLink href="/" active={pathname === links.home.pathname}>
            {links.home.label}
          </S.MenuLink>
        </Link>
        <Link href="" passHref>
          <S.MenuLink href="/" active={pathname === links.explore.pathname}>
            {links.explore.label}
          </S.MenuLink>
        </Link>
        <Link href="" passHref>
          <S.MenuLink href="/" active={pathname === links.profile.pathname}>
            {links.settings.label}
          </S.MenuLink>
        </Link>
        <Link href="" passHref>
          <S.MenuLink href="/" active={pathname === links.settings.pathname}>
            {links.profile.label}
          </S.MenuLink>
        </Link>
      </S.LinksWrapper>
    </S.Wrapper>
  )
}

export default Menu
