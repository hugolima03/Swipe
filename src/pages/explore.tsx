import { GetAllStudyCollectionsQuery } from 'generated/graphql'
import { QUERY_GET_ALL_COLLECTIONS } from 'graphql/queries/collections'
import { GetServerSideProps } from 'next'
import ExploreTemplate from 'templates/Explore'
import client from 'utils/apollo-client'

export default function Explore(data: GetAllStudyCollectionsQuery) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ExploreTemplate {...(data as any)} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<GetAllStudyCollectionsQuery>({
    query: QUERY_GET_ALL_COLLECTIONS
  })

  return {
    props: data
  }
}
