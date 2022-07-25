import StudyCollectionItem from 'components/StudyCollectionItem'
import { Category, QueryHomeQuery } from 'generated/graphql'
import Base from 'templates/Base'
import * as S from './styles'

export type ExploreProps = QueryHomeQuery

export type CategoriesList = Pick<Category, 'name' | 'image' | 'id' | 'slug'>[]

const Explore = ({ studyCollections }: ExploreProps) => {
  return (
    <Base>
      <S.Title>Explore</S.Title>

      {/* <S.SearchWrapper>
        <TextField placeholder="Search by subject, name or user..." />
      </S.SearchWrapper> */}

      <S.Subtitle>All sets</S.Subtitle>

      <S.CollectionsWrapper>
        {studyCollections.map(({ id, name }) => (
          <StudyCollectionItem key={id} id={id} name={name} />
        ))}
      </S.CollectionsWrapper>
    </Base>
  )
}

export default Explore
