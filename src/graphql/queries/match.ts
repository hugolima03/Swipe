import { gql } from '@apollo/client'

export const MUTATION_CREATE_MATCH = gql`
  mutation CreateMatch($data: MatchCreateInput!) {
    createMatch(data: $data) {
      id
    }
  }
`

export const MUTATION_PUBLISH_MATCH = gql`
  mutation PublishMatch($id: ID!) {
    publishMatch(to: PUBLISHED, where: { id: $id }) {
      id
    }
  }
`
