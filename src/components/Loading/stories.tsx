import { Story, Meta } from '@storybook/react'
import Loading from '.'

export default {
  title: 'Loading',
  component: Loading,
  parameters: {
    backgrounds: {
      default: 'swipe-dark',
      values: [{ name: 'swipe-dark', value: '#00aced' }]
    }
  }
} as Meta

export const Default: Story = () => <Loading />
