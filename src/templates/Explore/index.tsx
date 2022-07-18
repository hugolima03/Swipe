import StudyCollectionItem from 'components/StudyCollectionItem'
import { GetAllStudyCollectionsQuery } from 'generated/graphql'
import Base from 'templates/Base'
import * as S from './styles'

export type ExploreProps = GetAllStudyCollectionsQuery

const Explore = ({ studyCollections }: ExploreProps) => (
  <Base>
    <S.Wrapper>
      <S.Title>Explore</S.Title>

      <S.Subtitle>All sets</S.Subtitle>

      {studyCollections.map(({ id, name }) => (
        <StudyCollectionItem key={id} id={id} name={name} />
      ))}
    </S.Wrapper>
  </Base>
)

export default Explore
