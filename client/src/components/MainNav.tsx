import { Link } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext'
import { TbMessage, TbSearch, TbUser } from 'react-icons/tb'
import FlexBetween from './shared/utils/FlexBetween'
import FlexCenter from './shared/utils/FlexCenter'
import Logo from './Logo'
import MainNavItem from './MainNavItem'

/**------------------------------ main navigation bar
 * 
 * @name MainNav
 * @function component
 * @requires Link react-router-dom
 * @requires useAppContext custom hook
 * @requires TbMessage react-icons/tb
 * @requires TbSearch react-icons/tb
 * @requires TbUser react-icons/tb
 * @requires FlexBetween utility component
 * @requires FlexCenter utility component
 * @requires Logo component
 * @requires MainNavItem component
 * @returns the main navigation bar for the header container
 * 
 * --------------- */

const MainNav = () => {
  // ------------------------------ context
  const {
    state,
    setSearchActive,
    setSearchInactive,
    setModalActive,
    setModalInactive,
    setMenuActive,
    setMenuInactive
  } = useAppContext()
  // ------------------------------ search button
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
  // ------------------------------ chat button
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
  // ------------------------------ menu button
  const menuButton = () => {
    if (state.menu === false) {
      setMenuActive()
    } else {
      setMenuInactive()
    }
  }
  // ------------------------------ return
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