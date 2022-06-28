import { Story, Meta } from '@storybook/react'
import { Github } from '@styled-icons/boxicons-logos'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <TextField {...args} labelFor="test" label="Label" />
)

export const Disabled: Story<TextFieldProps> = (args) => (
  <TextField
    {...args}
    labelFor="test"
    label="Label"
    disabled
    placeholder="Disabled"
  />
)

export const Icon: Story<TextFieldProps> = (args) => (
  <TextField
    {...args}
    labelFor="test"
    label="Label"
    placeholder="Icon"
    icon={<Github />}
  />
)
