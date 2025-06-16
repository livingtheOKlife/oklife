import { useAppContext } from '../../hooks/useAppContext'

/**------------------------------ search container
 *
 * @name SearchContainer
 * @requires SearchContext useContext
 * @description contains the search bar component
 * @returns search container component
 *
 * --------------- */

const SearchContainer = () => {
  const {
    state,
  } = useAppContext()
  return state.search === true && <aside id="search-container">SearchContainer</aside>
}

export default SearchContainer