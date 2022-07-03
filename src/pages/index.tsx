import { CategoriesQuery } from 'generated/graphql'
import { QUERY_CATEGORIES } from 'graphql/queries/categories'

import Home, { HomeProps } from 'templates/Home'

import client from 'utils/apollo-client'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const { data } = await client.query<CategoriesQuery>({
    query: QUERY_CATEGORIES
  })

  return {
    props: {
      categories: data.categories
    }
  }
}
