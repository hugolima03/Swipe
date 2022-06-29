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
      { name: 'white', value: theme.colors.white },
      { name: 'pink', value: theme.colors.primary },
      { name: 'dark', value: theme.colors.black }
    ]
  }
  // values: [
  //   {
  //     name: 'swipe-white',
  //     value: theme.colors.white
  //   },
  //   {
  //     name: 'swipe-pink',
  //     value: theme.colors.primary
  //   },
  //   {
  //     name: 'dark',
  //     value: '#f00'
  //   }
  // ]
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
