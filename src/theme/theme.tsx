'use client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles'

import MUIThemeConfig from './mui-theme-config'

const theme = createTheme(MUIThemeConfig as ThemeOptions)

interface ThemeProps {
  children: React.ReactNode
}

const AppTheme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppTheme