import { Outlet } from 'react-router-dom'
import FlexBetween from './components/shared/utils/FlexBetween'
import HeaderContainer from './components/layout/HeaderContainer'
import SearchContainer from './components/layout/SearchContainer'
import ModalContainer from './components/layout/ModalContainer'
import MenuContainer from './components/layout/MenuContainer'
import FooterContainer from './components/layout/FooterContainer'
import AlertContainer from './components/layout/AlertContainer'

function App() {
  return (
    <FlexBetween component='div' className='App' flexDirection='column' position='relative'>
      <HeaderContainer />
      <Outlet />
      <SearchContainer />
      <ModalContainer />
      <MenuContainer />
      <AlertContainer />
      <FooterContainer />
    </FlexBetween>
  )
}

export default App
