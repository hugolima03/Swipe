import { ThemeProvider } from 'styled-components'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import theme from 'styles/theme'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  viewport: {
    defaultViewport: 'mobile1'
  },
  backgrounds: {
    values: [
      { name: 'white', value: theme.colors.mainBg },
      { name: 'pink', value: theme.colors.primary },
      { name: 'dark', value: theme.colors.black }
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
