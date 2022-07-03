import Button from 'components/Button'
import CategorySlider from 'components/CategorySlider'

import Base from 'templates/Base'

import * as S from './styles'

const Home = () => (
  <Base>
    <CategorySlider />

    <S.NoStudies>
      <p>Looks like you don't have study groups</p>
      <Button>Create Studies</Button>
    </S.NoStudies>
  </Base>
)

export default Home
