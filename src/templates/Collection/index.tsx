import { useMutation } from '@apollo/client'
import Button from 'components/Button'
import Header from 'components/Header'
import {
  CreateMatchMutation,
  GetCollectionByIdQuery,
  PublishMatchMutation
} from 'generated/graphql'
import {
  MUTATION_CREATE_MATCH,
  MUTATION_PUBLISH_MATCH
} from 'graphql/queries/match'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import * as S from './styles'

export type CollectionProps = {
  data: GetCollectionByIdQuery
}

const Collection = ({ data }: CollectionProps) => {
  const { push } = useRouter()

  const [collection] = useState(data.studyCollections[0])

  const [createMatch, { loading: createMatchLoading }] =
    useMutation<CreateMatchMutation>(MUTATION_CREATE_MATCH)

  const [publishMatch, { loading: publishMatchLoading }] =
    useMutation<PublishMatchMutation>(MUTATION_PUBLISH_MATCH)

  async function useCreateMatch() {
    await createMatch({
      variables: {
        data: { correctAnswers: 0, wrongAnswers: 0 }
      }
    }).then(async (e) => {
      await publishMatch({
        variables: {
          id: e.data?.createMatch?.id
        }
      })
      push(`/collection/${collection.id}/match/${e.data?.createMatch?.id}`)
    })
  }

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

        <Button
          styleType="minimal"
          onClick={useCreateMatch}
          loading={createMatchLoading || publishMatchLoading}
        >
          Start
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Collection
