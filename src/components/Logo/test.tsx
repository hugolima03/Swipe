import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render correctly', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/swipe/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/swipe/i)).toHaveStyle({ fill: '#1E252B' })
  })

  it('should render the correctly color', () => {
    render(<Logo color="white" />)

    expect(screen.getByLabelText(/swipe/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/swipe/i)).toHaveStyle({ fill: '#FFF' })
  })
})
