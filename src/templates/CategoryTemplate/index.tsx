import { CategoryInfo } from 'components/CategorySliderItem/styles'
import StudyCollectionItem from 'components/StudyCollectionItem'
import { Category } from 'generated/graphql'
import { useRouter } from 'next/router'
import { Wrapper } from 'templates/Base/styles'
import * as S from './styles'

export type CategoryTemplateProps = Pick<Category, 'name' | 'image'>

const CategoryTemplate = ({ image, name }: CategoryTemplateProps) => {
  const { query } = useRouter()

  return (
    <Wrapper style={{ justifyContent: 'flex-start', gap: '0.8rem' }}>
      <S.ImageWrapper layoutId={query.slug as string}>
        <S.CategoryImage
          style={{
            background: `url(${image?.url})`,
            backgroundSize: 'cover'
          }}
        />
        <CategoryInfo>
          <p>{name}</p>
        </CategoryInfo>
      </S.ImageWrapper>

      <S.ListWrapper>
        <StudyCollectionItem />
        <StudyCollectionItem />
        <StudyCollectionItem />
        <StudyCollectionItem />
      </S.ListWrapper>
    </Wrapper>
  )
}

export default CategoryTemplate
