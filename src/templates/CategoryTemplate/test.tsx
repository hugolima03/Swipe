import { render, screen } from 'utils/test-utils'

import CategoryTemplate from '.'

describe('<CategoryTemplate />', () => {
  it('should render the heading', () => {
    const { container } = render(<CategoryTemplate />)

    expect(
      screen.getByRole('heading', { name: /CategoryTemplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
