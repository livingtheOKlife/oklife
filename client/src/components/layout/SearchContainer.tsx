import { useAppContext } from '../../hooks/useAppContext'
import AbsoluteContainer from '../shared/utils/AbsoluteContainer'

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
  return state.search === true && 
    <AbsoluteContainer component='aside' id='menu-container'padding='0.5rem 1rem'>
      SearchContainer
    </AbsoluteContainer>
}

export default SearchContainer