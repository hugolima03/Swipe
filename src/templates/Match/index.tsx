import Card from 'components/Card'
import { GetCollectionByIdQuery } from 'generated/graphql'
import { useState } from 'react'
import * as S from './styles'

export type MatchProps = GetCollectionByIdQuery

const Match = ({ studyCollections }: MatchProps) => {
  const [collection] = useState(studyCollections[0])
  console.log(collection)

  // const [cards, setCards] = useState(collection.cards)
  // const [activeCard, setActiveCard] = useState(0)

  return (
    <S.Wrapper>
      <Card />
    </S.Wrapper>
  )
}

export default Match
