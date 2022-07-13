import { render } from 'utils/test-utils'

import Base from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  back: jest.fn()
}))

describe('<Base />', () => {
  it('should render the heading', () => {
    render(<Base>Children</Base>)
  })
})
