import { gql, QueryHookOptions, useQuery } from '@apollo/client'

export const QUERY_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
      slug
      image {
        url
      }
    }
  }
`

export const QUERY_GET_CATEGORY_BY_SLUG = gql`
  query GetCategoryBySlug {
    categories(where: { slug: "history" }) {
      name
      image {
        url
      }
    }
  }
`

export function useQueryCategories(options?: QueryHookOptions) {
  return useQuery(QUERY_CATEGORIES, options)
}
