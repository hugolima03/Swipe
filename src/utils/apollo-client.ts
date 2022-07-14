import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_URL}`,
  cache: new InMemoryCache(),
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}` }
})

export default client
