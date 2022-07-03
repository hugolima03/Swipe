import { Story, Meta } from '@storybook/react'
import CategorySliderItem, { CategorySliderItemProps } from '.'

export default {
  title: 'CategorySliderItem',
  component: CategorySliderItem,
  args: {
    image: { url: 'https://source.unsplash.com/user/willianjusten/1042x580' },
    name: 'Nome'
  } as CategorySliderItemProps
} as Meta

export const Default: Story<CategorySliderItemProps> = (args) => (
  <CategorySliderItem {...args} />
)
