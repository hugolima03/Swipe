import { GetCollectionByIdQuery } from 'generated/graphql'
import { QUERY_GET_COLLECTION_BY_ID } from 'graphql/queries/collections'
import { GetServerSideProps } from 'next'
import MatchTemplate from 'templates/Match'
import client from 'utils/apollo-client'

export default function Match(data: GetCollectionByIdQuery) {
  return <MatchTemplate {...data} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await client.query<GetCollectionByIdQuery>({
    query: QUERY_GET_COLLECTION_BY_ID,
    variables: {
      id: params?.collectionid
    }
  })

  return {
    props: data
  }
}
