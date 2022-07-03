import Button from 'components/Button'
import CategorySlider from 'components/CategorySlider'
import Base from 'templates/Base'

export default function Index() {
  return (
    <Base>
      <CategorySlider />

      <p>Looks like you don't have study groups</p>
      <Button>Create Studies</Button>
    </Base>
  )
}
