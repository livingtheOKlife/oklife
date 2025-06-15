import MainContainer from '../components/layout/MainContainer'

/**------------------------------ page not found page
 *
 * @name PageNotFoundPage
 * @function
 * @route *
 * @route /page-not-found
 * @requires MainContainer
 * @returns main container component for the page not found page
 *
 * --------------- */

const PageNotFoundPage = () => {
  return (
    <MainContainer page='home-page'>MainContainer - Page Not Found</MainContainer>
  )
}

export default PageNotFoundPage