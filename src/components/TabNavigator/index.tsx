import Link from 'next/link'
import { Home, School, Search } from 'styled-icons/material-rounded'
import * as S from './styles'

const TabNavigator = () => (
  <S.Wrapper>
    <Link href="/explore" passHref>
      <S.TabLink>
        <Search />
        Explore
      </S.TabLink>
    </Link>

    <Link href="/" passHref>
      <S.HomeLink>
        <Home />
        Home
      </S.HomeLink>
    </Link>

    <Link href="/profile" passHref>
      <S.TabLink>
        <School />
        Profile
      </S.TabLink>
    </Link>
  </S.Wrapper>
)

export default TabNavigator
