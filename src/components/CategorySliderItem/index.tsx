import * as S from './styles'

const CategorySliderItem = () => (
  <S.Wrapper>
    <S.CategoryImage
      src="https://source.unsplash.com/user/willianjusten/"
      width={220}
      height={220}
      objectFit="cover"
    />

    <S.CategoryInfo>
      <p>History</p>
    </S.CategoryInfo>
  </S.Wrapper>
)

export default CategorySliderItem
