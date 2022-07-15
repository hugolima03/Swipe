import { render } from 'utils/test-utils'

import Card from '.'

describe('<Card />', () => {
  it('should render the heading', () => {
    render(
      <Card
        id={'1'}
        answer={{ html: 'teste' }}
        question="question"
        onSwipe={jest.fn()}
      />
    )
  })
})
