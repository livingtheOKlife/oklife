import { useAppContext } from '../../hooks/useAppContext'
import MenuNav from '../MenuNav'
import AbsoluteContainer from '../shared/utils/AbsoluteContainer'

/**------------------------------ menu container
 *
 * @name MenuContainer
 * @requires MenuContext useContext
 * @returns menu container component
 * @description contains the menu navigation
 *
 * --------------- */

const MenuContainer = () => {
  const {
    state,
  } = useAppContext()
  return state.menu === true &&
    <AbsoluteContainer component='aside' id='menu-container' bottom='18px' padding='0.5rem 1rem 1.5rem 1rem'>
      <MenuNav />
    </AbsoluteContainer>
}

export default MenuContainer