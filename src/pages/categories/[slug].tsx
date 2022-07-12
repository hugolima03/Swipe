import {
  Category as CategoryType,
  GetCategoryPagesQuery
} from 'generated/graphql'
import {
  QUERY_GET_CATEGORY_BY_SLUG,
  QUERY_GET_CATEGORY_PAGES
} from 'graphql/queries/categories'
import { GetStaticPaths, GetStaticProps } from 'next'
import CategoryTemplate from 'templates/CategoryTemplate'
import client from 'utils/apollo-client'

export default function Category({
  category
}: {
  category: Pick<CategoryType, 'name' | 'image' | 'slug' | 'studyCollections'>
}) {
  return <CategoryTemplate {...category} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<GetCategoryPagesQuery>({
    query: QUERY_GET_CATEGORY_PAGES
  })

  const paths = data.categories.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: QUERY_GET_CATEGORY_BY_SLUG,
    variables: {
      slug: params?.slug
    }
  })

  if (!data.categories.length) return { notFound: true }

  return {
    revalidate: 60 * 60 * 24,
    props: {
      category: data.categories[0]
    }
  }
}
