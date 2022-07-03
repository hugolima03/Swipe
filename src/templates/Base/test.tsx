import { render } from 'utils/test-utils'

import Base from '.'

describe('<Base />', () => {
  it('should render the heading', () => {
    render(<Base>Children</Base>)
  })
})
