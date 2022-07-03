import { Story, Meta } from '@storybook/react'
import StudyCollectionItem from '.'

export default {
  title: 'StudyCollectionItem',
  component: StudyCollectionItem
} as Meta

export const Default: Story = () => (
  <>
    <StudyCollectionItem />
    <StudyCollectionItem />
  </>
)
