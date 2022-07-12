import Button from 'components/Button'
import CategorySlider from 'components/CategorySlider'
import { Category } from 'generated/graphql'

import Base from 'templates/Base'

import * as S from './styles'

export type HomeProps = {
  categories: Pick<Category, 'name' | 'image' | 'slug' | 'id'>[]
}

export default function Home({ categories }: HomeProps) {
  return (
    <Base>
      <CategorySlider categories={categories} />

      <S.NoStudies>
        <p>Looks like you don't have study groups</p>
        <Button>Create Studies</Button>
      </S.NoStudies>
    </Base>
  )
}
