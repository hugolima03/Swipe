import { Asset } from 'generated/graphql'
import { render } from 'utils/test-utils'
import CategorySliderItem from '.'

describe('<CategorySliderItem />', () => {
  it('should render the heading', () => {
    render(
      <CategorySliderItem
        name="testee"
        image={
          {
            url: 'https://source.unsplash.com/user/willianjusten/1042x580'
          } as Asset
        }
      />
    )
  })
})
