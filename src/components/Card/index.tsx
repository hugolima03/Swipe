import { useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'
import theme from 'styles/theme'
import * as S from './styles'

const Card = () => {
  const x = useMotionValue(0)
  const [front, setFront] = useState(true)

  const background = useTransform(
    x,
    [-50, 0, 50],
    [theme.colors.pink, '#fff', theme.colors.green]
  )

  function handleOnDragEnd() {
    if (x.get() > 80) {
      frontAnimation.start({
        x: 300,
        opacity: 0
      })
      backAnimation.start({
        x: 300,
        opacity: 0
      })
      return
    }
    if (x.get() < -80) {
      frontAnimation.start({
        x: -300,
        opacity: 0
      })
      backAnimation.start({
        x: -300,
        opacity: 0
      })
      return
    }
  }

  function handleOnClick() {
    if (x.get() === 0) {
      if (front) {
        setFront(false)
        frontAnimation.start({
          rotateY: 180,
          zIndex: 0
        })
        backAnimation.start({
          rotateY: 0,
          zIndex: 1
        })
      } else {
        setFront(true)
        frontAnimation.start({
          rotateY: 0,
          zIndex: 1
        })
        backAnimation.start({
          rotateY: 180,
          zIndex: 0
        })
      }
    }
  }

  const frontAnimation = useAnimation()
  const backAnimation = useAnimation()

  return (
    <S.Wrapper style={{ background }}>
      <S.Card
        aria-hidden={!front}
        drag
        whileDrag={{ scale: 1.05 }}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        onClick={handleOnClick}
        animate={frontAnimation}
        onDragEnd={handleOnDragEnd}
        dragElastic={{ bottom: 0.3, top: 0.3, left: 0.6, right: 0.6 }}
        style={{ x, zIndex: 1 }}
      >
        <h1>Frente</h1>
      </S.Card>

      <S.Card
        aria-hidden={front}
        drag
        whileDrag={{ scale: 1.05 }}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        onClick={handleOnClick}
        animate={backAnimation}
        onDragEnd={handleOnDragEnd}
        dragElastic={{ bottom: 0.3, top: 0.3, left: 0.6, right: 0.6 }}
        style={{ x, rotateY: 180, zIndex: 0 }}
      >
        <h1>Costa</h1>
      </S.Card>
    </S.Wrapper>
  )
}

export default Card
