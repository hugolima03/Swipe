import { fireEvent, render, screen } from 'utils/test-utils'
import Menu from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('<Menu />', () => {
  it('should render correctly', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/'
    }))

    render(<Menu setOpen={() => ({})} />)

    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/Explore/i)).toBeInTheDocument()
    expect(screen.getByText(/Settings/i)).toBeInTheDocument()
    expect(screen.getByText(/Profile/i)).toBeInTheDocument()
  })

  it('should render the active link corretcly', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/explore'
    }))

    render(<Menu setOpen={() => ({})} />)

    expect(screen.getByRole('link', { name: /Explore/i })).toHaveStyleRule(
      'position',
      'absolute',
      { modifier: '::before' }
    )
  })

  it('should fire click event when close button is clicked', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/explore'
    }))

    const onClick = jest.fn()

    render(<Menu onClose={onClick} setOpen={() => ({})} />)

    fireEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalled()
  })
})
