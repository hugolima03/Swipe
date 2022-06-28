import { ThemeProvider } from 'styled-components'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import theme from 'styles/theme'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: 'swipe-white',
    values: [
      {
        name: 'swipe-white',
        value: theme.colors.white
      },
      {
        name: 'swipe-pink',
        value: theme.colors.primary
      },
      {
        name: 'swipe-dark',
        value: theme.colors.black
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
]
