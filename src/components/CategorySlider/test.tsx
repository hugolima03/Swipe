import { render } from 'utils/test-utils'
import 'match-media-mock'

import CategorySlider from '.'

describe('<CategorySlider />', () => {
  it('should render the heading', () => {
    render(<CategorySlider categories={[]} />)
  })
})
