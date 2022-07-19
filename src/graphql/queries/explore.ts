import { gql } from '@apollo/client'

export const QUERY_EXPLORE = gql`
  query QueryHome {
    studyCollections {
      id
      name
    }

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
