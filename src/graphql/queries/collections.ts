import { gql } from '@apollo/client'

export const QUERY_GET_COLLECTION_PAGES = gql`
  query GetCollectionsPages {
    studyCollections {
      id
    }
  }
`

export const QUERY_GET_COLLECTION_BY_ID = gql`
  query GetCollectionById($id: ID!) {
    studyCollections(where: { id: $id }) {
      name
      id
      description
      image {
        url
        fileName
      }
      cards {
        id
        answer
        question
      }
    }
  }
`
