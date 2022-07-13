import { render } from 'utils/test-utils'

import StudyCollectionItem from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('<StudyCollectionItem />', () => {
  it('should render the heading', () => {
    useRouter.mockImplementationOnce(() => ({
      push: jest.fn()
    }))

    render(<StudyCollectionItem id="1" name="Name1" />)
  })
})
