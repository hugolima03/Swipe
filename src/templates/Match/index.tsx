import { Button } from 'components/Button/styles'
import Card from 'components/Card'
import { useMotionValue } from 'framer-motion'
import { GetCollectionByIdQuery } from 'generated/graphql'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Close } from 'styled-icons/material-rounded'
import * as S from './styles'

export type MatchProps = GetCollectionByIdQuery

const Match = ({ studyCollections }: MatchProps) => {
  const { back } = useRouter()
  const width = useMotionValue('0')

  const [collection] = useState(studyCollections[0])

  const [cards] = useState(collection.cards)
  const [activeCard, setActiveCard] = useState(0)

  function onSwipe(result: boolean) {
    console.log(result)
    width.set(`${(Number(activeCard + 1) / Number(cards.length)) * 100}vw`)
    setTimeout(() => {
      setActiveCard((a) => a + 1)
    }, 800)
  }

  return (
    <S.Wrapper>
      <S.ProgressBar style={{ width }} />

      <Button styleType="icon" className="close">
        <Close onClick={back} />
      </Button>

      {cards.map((card, index) => {
        if (index === activeCard) return <Card {...card} onSwipe={onSwipe} />
        return null
      })}
    </S.Wrapper>
  )
}

export default Match
