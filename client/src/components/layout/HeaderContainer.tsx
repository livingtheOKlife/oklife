import MainNav from '../MainNav'

/**------------------------------ header container
 *
 * @name HeaderContainer
 * @function
 * @requires MainNav component
 * @returns header container component
 * @description contains the main navigation bar
 *
 * --------------- */

const HeaderContainer = () => {
  return (
    <header id='header-container' style={{ padding: '0.75rem 0.75rem 0.5rem 0.75rem' }}>
      <MainNav />
    </header>
  )
}

export default HeaderContainer