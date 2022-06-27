import { render } from 'utils/test-utils'
import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    render(<Button>Teste</Button>)
  })
})
