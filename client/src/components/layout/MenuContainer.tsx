import { useAppContext } from '../../hooks/useAppContext'

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
    <aside id="menu-container">
      <nav id="menu-nav">
        <ul>
          <li>MenuContainer - Menu Nav Item</li>
        </ul>
      </nav>
    </aside>
}

export default MenuContainer