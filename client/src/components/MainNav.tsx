import { Link } from 'react-router-dom'
import { TbMessage, TbSearch, TbUser } from 'react-icons/tb'
import { useAppContext } from '../hooks/useAppContext'
import Logo from './Logo'
import MainNavItem from './MainNavItem'
import FlexBetween from './shared/utils/FlexBetween'
import FlexCenter from './shared/utils/FlexCenter'

const MainNav = () => {
  const {
    state,
    setSearchActive,
    setSearchInactive,
    setModalActive,
    setModalInactive,
    setMenuActive,
    setMenuInactive
  } = useAppContext()
  const searchButton = () => {
    if (state.menu === true) {
      setMenuInactive()
      setModalInactive()
      setSearchActive()
    } else if (state.modal === true) {
      setModalInactive()
      setSearchActive()
    } else if (state.search === false) {
      setSearchActive()
    } else {
      setSearchInactive()
    }
  }
  const chatButton = () => {
    if (state.menu === true) {
      setMenuInactive()
      setSearchInactive()
      setModalActive()
    } else if (state.search === true) {
      setSearchInactive()
      setModalActive()
    } else if (state.modal === false) {
      setModalActive()
    } else {
      setModalInactive()
    }
  }
  const menuButton = () => {
    if (state.menu === false) {
      setMenuActive()
    } else {
      setMenuInactive()
    }
  }
  return (
    <FlexBetween component='nav' id='main-nav' alignItems='center' maxWidth='1100px' margin='0 auto'>
      <Link to='/' style={{ padding: '0.25rem' }}>
        <Logo />
      </Link>
      <FlexCenter component='ul' gap='0.5rem' fontSize='1.6rem'>
        <MainNavItem onClick={searchButton}>
          <TbSearch />
        </MainNavItem>
        <MainNavItem onClick={chatButton}>
          <TbMessage />
        </MainNavItem>
        <MainNavItem onClick={menuButton}>
          <TbUser />
        </MainNavItem>
      </FlexCenter>
    </FlexBetween>
  )
}

export default MainNav