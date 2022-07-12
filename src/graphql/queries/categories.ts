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
  query GetCategoryBySlug($slug: String!) {
    categories(where: { slug: $slug }) {
      name
      image {
        url
      }
      studyCollections {
        id
        name
        slug
      }
    }
  }
`

export const QUERY_GET_CATEGORY_PAGES = gql`
  query GetCategoryPages {
    categories {
      slug
    }
  }
`

export function useQueryCategories(options?: QueryHookOptions) {
  return useQuery(QUERY_CATEGORIES, options)
}
