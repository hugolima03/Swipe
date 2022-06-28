import { Story, Meta } from '@storybook/react'
import TextField from '.'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Default: Story = () => <TextField labelFor="test" label="Label" />

export const Disabled: Story = () => (
  <TextField labelFor="test" label="Label" disabled placeholder="Disabled" />
)

export const Icon: Story = () => (
  <TextField labelFor="test" label="Label" placeholder="Icon" />
)
