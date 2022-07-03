import { render } from 'utils/test-utils'
import 'match-media-mock'

import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    render(<Home />)
  })
})
