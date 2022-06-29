import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: { color: 'black' } as LogoProps
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
