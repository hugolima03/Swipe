import Button from 'components/Button'
import Header from 'components/Header'
import Image from 'next/image'

import * as S from './styles'

const Collection = () => (
  <S.Wrapper>
    <Header />
    <div>
      <S.ImageWrapper>
        <Image
          src="https://media.graphassets.com/IQz1OacQdqiNGnpIUhtw?_gl=1*1fk0xys*_ga*MTk4MzMzNzE2OC4xNjU2MzUzNDQ2*_ga_G6FYGSYGZ4*MTY1NzU4NjQ4NS43LjEuMTY1NzU4Njg4Ny4xMA.."
          layout="fill"
        />
      </S.ImageWrapper>

      <S.Content>
        <S.Title>Algorithms</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </S.Description>
      </S.Content>
    </div>

    <S.Footer>
      <S.FooterInfo>
        <strong>76</strong>
        <p>cards</p>
      </S.FooterInfo>

      <Button styleType="minimal">Start</Button>
    </S.Footer>
  </S.Wrapper>
)

export default Collection
