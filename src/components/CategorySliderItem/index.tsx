import { Category } from 'generated/graphql'
import Link from 'next/link'

import * as S from './styles'

export type CategorySliderItemProps = Pick<Category, 'name' | 'image' | 'slug'>

const CategorySliderItem = ({ name, image, slug }: CategorySliderItemProps) => (
  <Link href={`categories/${slug}`} passHref>
    <S.Wrapper>
      <S.CategoryImage
        style={{
          background: `url(${image.url})`,
          backgroundSize: 'cover',
          backgroundPosition: ' center'
        }}
        width={220}
        height={220}
        alt={image.fileName}
      />
      <S.CategoryInfo>
        <p>{name}</p>
      </S.CategoryInfo>
    </S.Wrapper>
  </Link>
)

export default CategorySliderItem
