import Header from 'components/Header'
import TabNavigator from 'components/TabNavigator'
import * as S from './styles'

type BaseProps = {
  children: React.ReactNode
  wrapperStyle?: React.CSSProperties
}

const Base = ({ children, wrapperStyle }: BaseProps) => (
  <S.Wrapper style={wrapperStyle}>
    <Header />
    <S.Content>{children}</S.Content>
    <TabNavigator />
  </S.Wrapper>
)

export default Base
