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

export function useQueryCategories(options?: QueryHookOptions) {
  return useQuery(QUERY_CATEGORIES, options)
}
