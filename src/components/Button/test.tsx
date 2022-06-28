import { fireEvent, render, screen } from 'utils/test-utils'
import Button from '.'

describe('<Button />', () => {
  it('should render the children', () => {
    render(<Button>Teste</Button>)
    expect(screen.getByText(/Teste/i)).toBeInTheDocument()
  })

  it('should render the primary style correctly', () => {
    render(<Button>Teste</Button>)
    expect(screen.getByRole('button', { name: /Teste/i })).toHaveStyle({
      borderColor: '#FF2773',
      backgroundColor: '#FF2773',
      color: 'white'
    })
  })
  it('should render the outline style correctly', () => {
    render(<Button styleType="outline">Teste</Button>)
    expect(screen.getByRole('button', { name: /Teste/i })).toHaveStyle({
      borderColor: '#FF2773',
      backgroundColor: 'white',
      color: '#FF2773'
    })
  })
  it('should render the minimal style correctly', () => {
    render(<Button styleType="minimal">Teste</Button>)
    expect(screen.getByRole('button', { name: /Teste/i })).toHaveStyle({
      borderColor: 'white',
      backgroundColor: 'white',
      color: '#FF2773'
    })
  })
  it('should render the disabled style correctly', () => {
    render(
      <Button styleType="minimal" disabled>
        Teste
      </Button>
    )
    expect(screen.getByRole('button', { name: /Teste/i })).toHaveAttribute(
      'disabled',
      ''
    )
  })
  it('should render the hover style correctly', () => {
    render(<Button>Teste</Button>)

    fireEvent.mouseEnter(screen.getByRole('button', { name: /Teste/i }))

    expect(screen.getByRole('button', { name: /Teste/i })).toHaveStyleRule(
      'background-color',
      '#ff5a94',
      {
        modifier: ':hover'
      }
    )
  })
  it('should render the custom background color style correctly', () => {
    render(<Button backgroundColor="blue">Teste</Button>)
    expect(screen.getByRole('button', { name: /Teste/i })).toHaveStyle({
      backgroundColor: 'rgb(64, 86, 244);'
    })
  })
  it('should disable button when loading', () => {
    const onClick = jest.fn()

    render(
      <Button onClick={onClick} loading>
        Teste
      </Button>
    )
    fireEvent.click(screen.getByRole('button'))

    expect(onClick).not.toHaveBeenCalled()
  })
  it('should run onClick when pressed', () => {
    const onClick = jest.fn()

    render(<Button onClick={onClick}>Teste</Button>)

    fireEvent.click(screen.getByRole('button', { name: /Teste/i }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
