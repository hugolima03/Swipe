import Card from 'components/Card'
import { GetCollectionByIdQuery } from 'generated/graphql'
import { useState } from 'react'
import * as S from './styles'

export type MatchProps = GetCollectionByIdQuery

const Match = ({ studyCollections }: MatchProps) => {
  const [collection] = useState(studyCollections[0])

  const [cards] = useState(collection.cards)
  const [activeCard, setActiveCard] = useState(0)

  function onSwipe(result: boolean) {
    console.log(result)
    setTimeout(() => {
      setActiveCard((a) => a + 1)
    }, 800)
  }

  return (
    <S.Wrapper>
      {cards.map((card, index) => {
        if (index === activeCard) return <Card {...card} onSwipe={onSwipe} />
        return null
      })}
    </S.Wrapper>
  )
}

export default Match
