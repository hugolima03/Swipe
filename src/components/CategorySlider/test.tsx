import { render, screen } from 'utils/test-utils'
import 'match-media-mock'

import { mock } from './mock'

import CategorySlider from '.'

describe('<CategorySlider />', () => {
  it('should render the images', () => {
    render(<CategorySlider categories={mock.categories} />)
    expect(screen.getAllByText(/Math/i)).toHaveLength(1)
    expect(screen.getAllByText(/History/i)).toHaveLength(1)
  })
})
