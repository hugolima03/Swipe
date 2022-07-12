import Button from 'components/Button'
import { CategoryInfo } from 'components/CategorySliderItem/styles'
import StudyCollectionItem from 'components/StudyCollectionItem'
import { Category } from 'generated/graphql'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Close } from 'styled-icons/material-rounded'
import { Wrapper } from 'templates/Base/styles'
import * as S from './styles'

export type CategoryTemplateProps = Pick<
  Category,
  'name' | 'image' | 'studyCollections'
>

const CategoryTemplate = ({
  image,
  name,
  studyCollections
}: CategoryTemplateProps) => {
  const { back } = useRouter()

  return (
    <Wrapper style={{ justifyContent: 'flex-start', gap: '0.8rem' }}>
      <S.ImageWrapper>
        <S.CategoryImageWrapper>
          <Image src={image.url as string} layout="fill" objectFit="cover" />
        </S.CategoryImageWrapper>
        <Button id="close" styleType="icon" onClick={() => back()}>
          {<Close />}
        </Button>
        <CategoryInfo>
          <p>{name}</p>
        </CategoryInfo>
      </S.ImageWrapper>

      <S.ListWrapper>
        {studyCollections.map((study) => (
          <StudyCollectionItem key={study.id} />
        ))}
      </S.ListWrapper>
    </Wrapper>
  )
}

export default CategoryTemplate
