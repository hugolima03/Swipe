import Button from 'components/Button'
import Header from 'components/Header'
import { GetCollectionByIdQuery } from 'generated/graphql'
import Image from 'next/image'
import { useState } from 'react'

import * as S from './styles'

export type CollectionProps = {
  data: GetCollectionByIdQuery
}

const Collection = ({ data }: CollectionProps) => {
  const [collection] = useState(data.studyCollections[0])

  return (
    <S.Wrapper>
      <Header enableMenu={false} enableArrowBack />
      <div>
        <S.ImageWrapper>
          <Image
            src={collection.image.url}
            alt={collection.image.fileName}
            layout="fill"
            objectFit="cover"
          />
        </S.ImageWrapper>

        <S.Content>
          <S.Title>{collection.name}</S.Title>
          <S.Description>{collection.description}</S.Description>
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
}

export default Collection
