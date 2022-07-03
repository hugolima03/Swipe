import CategorySliderItem from 'components/CategorySliderItem'
import Slider, { SliderSettings } from 'components/Slider'
import { Category } from 'generated/graphql'

import * as S from './styles'

const settings: SliderSettings = {
  dots: false,
  arrows: false,
  vertical: false,
  verticalSwiping: false,
  infinite: true,
  centerMode: true,
  centerPadding: '60px'
}

export type CategorySliderProps = {
  categories: Category[]
}

const CategorySlider = ({ categories }: CategorySliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {categories.map((category) => (
        <>
          <CategorySliderItem key={category.id} {...category} />
          {console.log(category)}
        </>
      ))}
    </Slider>
  </S.Wrapper>
)

export default CategorySlider
