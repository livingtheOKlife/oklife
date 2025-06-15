import MainContainer from '../components/layout/MainContainer'

/**------------------------------ home page
 *
 * @name HomePage
 * @function
 * @route index
 * @requires MainContainer
 * @returns main container component for the home page
 *
 * --------------- */

const HomePage = () => {
  return (
    <MainContainer page='home-page'>MainContainer - Homepage</MainContainer>
  )
}

export default HomePage