import { render, screen } from 'utils/test-utils'
import CategorySliderItem from '.'

describe('<CategorySliderItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<CategorySliderItem />)

    expect(
      screen.getByRole('heading', { name: /CategorySliderItem/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
