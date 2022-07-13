import Link from 'next/link'
import { Calculate } from 'styled-icons/material-outlined'
import * as S from './styles'

export type StudyCollectionItemProps = {
  id: string
  name: string
}

const StudyCollectionItem = ({ name, id }: StudyCollectionItemProps) => {
  return (
    <Link href={`/collection/${id}`} passHref>
      <S.Wrapper>
        <S.IconWrapper>
          <Calculate />
        </S.IconWrapper>
        <span>
          <strong>{name}</strong>
          {/* <p>Description</p> */}
        </span>
      </S.Wrapper>
    </Link>
  )
}

export default StudyCollectionItem
