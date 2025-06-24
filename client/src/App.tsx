import { useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { darkModeTheme, lightModeTheme } from './theme'
import FlexBetween from './components/shared/utils/FlexBetween'
import HeaderContainer from './components/layout/HeaderContainer'
import SearchContainer from './components/layout/SearchContainer'
import ModalContainer from './components/layout/ModalContainer'
import MenuContainer from './components/layout/MenuContainer'
import FooterContainer from './components/layout/FooterContainer'
import AlertContainer from './components/layout/AlertContainer'

function App() {
  const darkMode = useMediaQuery('(prefers-color-scheme: dark')
  const theme = useMemo(() => createTheme(darkMode ? darkModeTheme : lightModeTheme), [darkMode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FlexBetween component='div' className='App' flexDirection='column' position='relative'>
        <HeaderContainer />
        <Outlet />
        <SearchContainer />
        <ModalContainer />
        <MenuContainer />
        <AlertContainer />
        <FooterContainer />
      </FlexBetween>
    </ThemeProvider>
  )
}

export default App
