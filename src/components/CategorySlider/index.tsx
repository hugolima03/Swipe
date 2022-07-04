import CategorySliderItem from 'components/CategorySliderItem'
import Slider, { SliderSettings } from 'components/Slider'
import { Category } from 'generated/graphql'

import * as S from './styles'

const settings: SliderSettings = {
  dots: false,
  arrows: false,
  vertical: false,
  verticalSwiping: false,
  infinite: false,
  centerMode: true,
  centerPadding: '60px'
}

export type CategorySliderProps = {
  categories: Pick<Category, 'name' | 'image' | 'id' | 'slug'>[]
}

const CategorySlider = ({ categories }: CategorySliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {categories.map((category) => (
        <CategorySliderItem key={category.id} {...category} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default CategorySlider
