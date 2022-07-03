import { Asset } from 'generated/graphql'
import { render, screen } from 'utils/test-utils'
import CategorySliderItem from '.'

describe('<CategorySliderItem />', () => {
  it('should render the image', () => {
    render(
      <CategorySliderItem
        name="testee"
        image={
          {
            url: 'https://source.unsplash.com/user/willianjusten/1042x580',
            fileName: 'fileName'
          } as Asset
        }
      />
    )

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText(/Testee/i)).toBeInTheDocument()
    expect(screen.getByAltText(/fileName/i)).toBeInTheDocument()
  })
})
