import { Story, Meta } from '@storybook/react'
import TabNavigator from '.'

export default {
  title: 'TabNavigator',
  component: TabNavigator,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end'
    }}
  >
    <TabNavigator />
  </div>
)
