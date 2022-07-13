import { render } from 'utils/test-utils'
import 'match-media-mock'

import Home from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  back: jest.fn()
}))

describe('<Home />', () => {
  it('should render the heading, tabNavigator and content', () => {
    render(<Home categories={[]} />)
  })
})
