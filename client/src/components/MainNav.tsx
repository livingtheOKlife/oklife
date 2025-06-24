import { useAppContext } from '../hooks/useAppContext'
import { Link } from 'react-router-dom'
import { TbMessage, TbSearch, TbUser } from 'react-icons/tb'

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
  return (
    <FlexBetween component='nav' id='main-nav' alignItems='center' maxWidth='1100px' margin='0 auto'>
      <Link to='/' style={{ padding: '0.25rem' }}>
        <h1><em>OK</em>life</h1>
      </Link>
      <FlexCenter component='ul' gap='0.5rem'>
        <li style={{ padding: '0.45rem' }} onClick={() => {
          if (state.search === false) {
            setSearchActive()
          } else {
            setSearchInactive()
          }
        }}>
          <TbSearch />
        </li>
        <li style={{ padding: '0.45rem' }} onClick={() => {
          if (state.modal === false) {
            setModalActive()
          } else {
            setModalInactive()
          }
        }}>
          <TbMessage />
        </li>
        <li style={{ padding: '0.45rem' }} onClick={() => {
          if (state.menu === false) {
            setMenuActive()
          } else {
            setMenuInactive()
          }
        }}>
          <TbUser />
        </li>
      </FlexCenter>
    </FlexBetween>
  )
}

export default MainNav