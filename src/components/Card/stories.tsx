import { Story, Meta } from '@storybook/react'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
    viewport: 'defaultViewport',
    args: {
      id: '1',
      answer: { html: 'answer' },
      onSwipe: () => ({}),
      question: 'questiong'
    } as CardProps
  }
} as Meta

export const Default: Story<CardProps> = (args) => <Card {...args} />
