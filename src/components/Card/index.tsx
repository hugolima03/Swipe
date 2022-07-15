import { useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'
import theme from 'styles/theme'
import * as S from './styles'

export type CardProps = {
  __typename?: 'Card' | undefined
  id: string
  answer: {
    __typename?: 'RichText' | undefined
    html: string
  }

  question: string
  onSwipe: (result: boolean) => void
}

const Card = ({ answer, question, onSwipe }: CardProps) => {
  const x = useMotionValue(0)
  const [front, setFront] = useState(true)

  const background = useTransform(
    x,
    [-300, -50, 0, 50, 300],
    [
      theme.colors.white,
      theme.colors.pink,
      theme.colors.white,
      theme.colors.green,
      theme.colors.white
    ]
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

      onSwipe(true)
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

      onSwipe(false)
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
    <S.Wrapper
      style={{ background, opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
    >
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
        <h1>{question}</h1>
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
        dangerouslySetInnerHTML={{ __html: answer.html }}
      />
    </S.Wrapper>
  )
}

export default Card
