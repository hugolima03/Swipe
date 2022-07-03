import { Story, Meta } from '@storybook/react'
import CategorySlider, { CategorySliderProps } from '.'

import { mock } from './mock'

export default {
  title: 'CategorySlider',
  component: CategorySlider,
  args: mock as CategorySliderProps,
  parameters: { layout: 'fullscreen' }
} as Meta

export const Default: Story<CategorySliderProps> = (args) => (
  <CategorySlider {...args} />
)
