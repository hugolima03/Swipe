import { CategoryInfo } from 'components/CategorySliderItem/styles'
import StudyCollectionItem from 'components/StudyCollectionItem'
import { Wrapper } from 'templates/Base/styles'
import * as S from './styles'

const CategoryTemplate = () => (
  <Wrapper style={{ justifyContent: 'flex-start', gap: '0.8rem' }}>
    <S.ImageWrapper>
      <S.CategoryImage />
      <CategoryInfo>
        <p>Teste</p>
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

export default CategoryTemplate
