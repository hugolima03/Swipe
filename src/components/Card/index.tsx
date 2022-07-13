import { useMotionValue, useTransform } from 'framer-motion'
import theme from 'styles/theme'
import * as S from './styles'

const Card = () => {
  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    [theme.colors.pink, '#fff', theme.colors.green]
  )

  return (
    <S.Wrapper style={{ background }}>
      <S.Card
        drag
        whileTap={{ scale: 1.05 }}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        dragElastic={{ bottom: 0.3, top: 0.3, left: 0.6, right: 0.6 }}
        style={{ x }}
      >
        <h1>Card</h1>
      </S.Card>
    </S.Wrapper>
  )
}

export default Card
