import { Github } from 'styled-icons/boxicons-logos'
import { fireEvent, render, screen } from 'utils/test-utils'

import TextField from '.'

describe('<TextField />', () => {
  it('should render correctly', () => {
    render(<TextField label="Label" labelFor="field" />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).not.toHaveAttribute('disabled')
    expect(screen.getByLabelText(/Label/i)).toBeInTheDocument()
  })

  it('should change input value', () => {
    render(<TextField label="Label" labelFor="field" />)

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Digitando' }
    })

    expect(screen.getByRole('textbox')).toHaveValue('Digitando')
  })
  it('should call on onInputChange', () => {
    const onChange = jest.fn()

    render(
      <TextField label="Label" labelFor="field" onInputChange={onChange} />
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Digitando' }
    })

    expect(onChange).toHaveBeenCalled()
  })

  it('should render icon', () => {
    render(
      <TextField
        label="Label"
        labelFor="field"
        icon={<Github aria-label="Github" />}
      />
    )

    expect(screen.getByLabelText(/Github/i)).toBeInTheDocument()
  })

  it('should show initialValue', () => {
    render(
      <TextField label="Label" labelFor="field" initialValue="initial test" />
    )

    expect(screen.getByRole('textbox')).toHaveValue('initial test')
  })

  it('should render disabled style', () => {
    render(<TextField label="Label" labelFor="field" disabled />)

    expect(screen.getByRole('textbox')).toHaveAttribute('disabled', '')
    expect(screen.getByRole('textbox')).toHaveStyle({
      backgroundColor: '#EAEAEA',
      cursor: 'not-allowed',
      border: '0.1rem solid #685879'
    })
  })

  it('should render hover style', () => {
    render(<TextField label="Label" labelFor="field" />)

    fireEvent.mouseEnter(screen.getByRole('textbox'))

    expect(screen.getByRole('textbox')).toHaveStyleRule(
      'border',
      '0.1rem solid #685879',
      { modifier: ':hover' }
    )
  })

  it('should render focus style', () => {
    render(<TextField label="Label" labelFor="field" />)

    fireEvent.click(screen.getByRole('textbox'))

    expect(screen.getByRole('textbox')).toHaveStyleRule(
      'border',
      '0.2rem solid #685879',
      { modifier: ':focus' }
    )
  })
})
