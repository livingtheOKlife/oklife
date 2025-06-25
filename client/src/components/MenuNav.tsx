import FlexCenter from './shared/utils/FlexCenter'

/**------------------------------ menu navigation panel
 * 
 * @name MenuNav
 * @function component
 * @requires FlexCenter utility component
 * @returns the menu navigation panel for the menu container
 * 
 * --------------- */

const MenuNav = () => {
  return (
    <FlexCenter component='nav' id='menu-nav' flexDirection='column'>
      <ul>
        <li>MenuContainer - Menu Nav Item</li>
      </ul>
    </FlexCenter>
  )
}

export default MenuNav