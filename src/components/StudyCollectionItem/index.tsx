import { Calculate } from 'styled-icons/material-outlined'
import * as S from './styles'

const StudyCollectionItem = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <Calculate />
    </S.IconWrapper>
    <span>
      <strong>StudyCollectionItem</strong>
      <p>Description</p>
    </span>
  </S.Wrapper>
)

export default StudyCollectionItem
