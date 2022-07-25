import { MockedProvider, MockedResponse } from '@apollo/client/testing'

import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const mocks: MockedResponse<Record<string, unknown>>[] = []

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  back: jest.fn()
}))

const customRender = (
  ui: React.ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </MockedProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
