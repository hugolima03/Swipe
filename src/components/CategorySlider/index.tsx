import CategorySliderItem from 'components/CategorySliderItem'
import Slider, { SliderSettings } from 'components/Slider'

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

const CategorySlider = () => (
  <S.Wrapper>
    <Slider settings={settings}>
      <CategorySliderItem />
      <CategorySliderItem />
      <CategorySliderItem />
    </Slider>
  </S.Wrapper>
)

export default CategorySlider
