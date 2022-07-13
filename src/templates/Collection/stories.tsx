import { Story, Meta } from '@storybook/react'
import Collection, { CollectionProps } from '.'

import { data } from './mock'

export default {
  title: 'Collection',
  component: Collection,
  args: { data } as CollectionProps
} as Meta

export const Default: Story<CollectionProps> = (args) => (
  <Collection {...args} />
)
