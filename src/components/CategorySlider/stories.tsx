import { Story, Meta } from '@storybook/react'
import CategorySlider from '.'

export default {
  title: 'CategorySlider',
  component: CategorySlider,
  parameters: { layout: 'fullscreen' }
} as Meta

export const Default: Story = () => <CategorySlider />
