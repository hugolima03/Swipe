import { GetCollectionByIdQuery } from 'generated/graphql'
import { render } from 'utils/test-utils'

import Collection from '.'
import { data } from './mock'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  back: jest.fn()
}))

describe('<Collection />', () => {
  it('should render the heading', () => {
    render(<Collection data={data as GetCollectionByIdQuery} />)
  })
})
