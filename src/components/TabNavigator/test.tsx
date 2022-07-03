import { render, screen } from 'utils/test-utils'
import TabNavigator from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('<TabNavigator />', () => {
  it('should render the links corretcly', () => {
    useRouter.mockImplementation(() => ({
      pathname: '/'
    }))

    render(<TabNavigator />)

    expect(screen.getByRole('link', { name: /Explore/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Profile/i })).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Home/i }).parentElement
    ).toMatchSnapshot()
  })
})
