import { QueryHomeQuery } from 'generated/graphql'
import { QUERY_EXPLORE } from 'graphql/queries/explore'
import { GetServerSideProps } from 'next'
import ExploreTemplate from 'templates/Explore'
import client from 'utils/apollo-client'

export default function Explore(data: QueryHomeQuery) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ExploreTemplate {...(data as any)} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<QueryHomeQuery>({
    query: QUERY_EXPLORE
  })

  return {
    props: data
  }
}
