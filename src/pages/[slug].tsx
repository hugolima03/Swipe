import { Category as CategoryType } from 'generated/graphql'
import { QUERY_GET_CATEGORY_BY_SLUG } from 'graphql/queries/categories'
import CategoryTemplate from 'templates/CategoryTemplate'
import client from 'utils/apollo-client'

export default function Category({
  category
}: {
  category: Pick<CategoryType, 'name' | 'image' | 'slug'>
}) {
  return <CategoryTemplate {...category} />
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: QUERY_GET_CATEGORY_BY_SLUG
  })

  return {
    props: {
      category: data.categories[0]
    }
  }
}
