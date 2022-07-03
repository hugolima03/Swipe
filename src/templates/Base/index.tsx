import Header from 'components/Header'
import TabNavigator from 'components/TabNavigator'
import * as S from './styles'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Header />
    <S.Content>{children}</S.Content>
    <TabNavigator />
  </S.Wrapper>
)

export default Base
