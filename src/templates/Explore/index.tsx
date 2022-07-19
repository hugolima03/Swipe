import CategorySlider from 'components/CategorySlider'
import StudyCollectionItem from 'components/StudyCollectionItem'
import { Category, QueryHomeQuery } from 'generated/graphql'
import { useState } from 'react'
import Base from 'templates/Base'
import * as S from './styles'

export type ExploreProps = QueryHomeQuery

export type CategoriesList = Pick<Category, 'name' | 'image' | 'id' | 'slug'>[]

const Explore = ({ studyCollections, categories }: ExploreProps) => {
  const [categoriesList] = useState<CategoriesList>(
    categories as CategoriesList
  )

  return (
    <Base>
      <S.Wrapper>
        <S.Title>Explore</S.Title>

        {/* <S.SearchWrapper>
        <TextField placeholder="Search by subject, name or user..." />
      </S.SearchWrapper> */}
        <CategorySlider categories={categoriesList} />

        <S.Subtitle>All sets</S.Subtitle>

        {studyCollections.map(({ id, name }) => (
          <StudyCollectionItem key={id} id={id} name={name} />
        ))}
      </S.Wrapper>
    </Base>
  )
}

export default Explore
