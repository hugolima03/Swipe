import { Category } from 'generated/graphql'
import Link from 'next/link'

import * as S from './styles'

type CategorySliderItemProps = Pick<Category, 'name' | 'image'>

const CategorySliderItem = ({ name, image }: CategorySliderItemProps) => (
  <Link href="/" passHref>
    <S.Wrapper>
      <S.CategoryImage
        src={image.url}
        width={220}
        height={220}
        objectFit="cover"
      />
      <S.CategoryInfo>
        <p>{name}</p>
      </S.CategoryInfo>
    </S.Wrapper>
  </Link>
)

export default CategorySliderItem
