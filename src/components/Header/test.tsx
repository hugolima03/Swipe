import { fireEvent, render, screen } from 'utils/test-utils'

import Header from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  pathname: '/'
}))

describe('<Header />', () => {
  it('should render the heading', () => {
    render(<Header />)

    expect(screen.getByLabelText(/swipe/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open-menu/i)).toBeInTheDocument()
  })

  it('should open the Menu', () => {
    render(<Header />)

    fireEvent.click(screen.getByLabelText(/open-menu/i))

    expect(screen.getByRole('link', { name: /Home/i }))
    expect(screen.getByRole('link', { name: /Explore/i }))
    expect(screen.getByRole('link', { name: /Settings/i }))
    expect(screen.getByRole('link', { name: /Profile/i }))
  })
})
