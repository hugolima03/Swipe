import {
  GetCollectionByIdQuery,
  GetCollectionsPagesQuery
} from 'generated/graphql'
import {
  QUERY_GET_COLLECTION_BY_ID,
  QUERY_GET_COLLECTION_PAGES
} from 'graphql/queries/collections'
import { GetStaticPaths, GetStaticProps } from 'next'
import CollectionTemplate from 'templates/Collection'
import client from 'utils/apollo-client'

export default function Collection(data: GetCollectionByIdQuery) {
  return <CollectionTemplate data={data} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<GetCollectionsPagesQuery>({
    query: QUERY_GET_COLLECTION_PAGES
  })

  const paths = data.studyCollections.map(({ id }) => ({
    params: { collectionid: id }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query<GetCollectionByIdQuery>({
    query: QUERY_GET_COLLECTION_BY_ID,
    variables: {
      id: params?.collectionid
    }
  })

  return {
    revalidate: 60 * 60 * 24,
    props: data
  }
}
