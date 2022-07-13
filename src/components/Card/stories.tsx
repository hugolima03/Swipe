import { Story, Meta } from '@storybook/react'
import Card from '.'

export default {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
    viewport: 'defaultViewport'
  }
} as Meta

export const Default: Story = () => <Card />
