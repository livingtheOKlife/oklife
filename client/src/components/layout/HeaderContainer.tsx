import { TbUser } from 'react-icons/tb'

/**------------------------------ header container
 *
 * @name HeaderContainer
 * @function
 * @requires react-router-dom
 * @returns header container component
 * @description contains the main navigation bar
 *
 * --------------- */

const HeaderContainer = () => {
  return (
    <header id='header-container'>
      <nav id='main-nav'>
        <h1><em>OK</em>life</h1>
        <ul>
          <li>
            <TbUser />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderContainer