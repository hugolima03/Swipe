import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <Button {...args}>Label</Button>
)

export const Disabled: Story<ButtonProps> = (args) => (
  <Button {...args} disabled>
    Label
  </Button>
)
