import { useReducer } from 'react'
import { AppContext } from './AppContext'
import AppReducer from './AppReducer'

type Props = {
  children: React.ReactNode
}

/**------------------------------ app provider
 *
 * @name AppProvider
 * @function
 * @requires useReducer
 * @requires AppReducer useReducer
 * @requires AppContext
 * @returns app provider component
 *
 * --------------- */

export const AppProvider = ({ children }:Props) => {
  const initialState = {
    search: false,
    modal: false,
    menu: false,
    alert: false,
  }
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const setSearchActive = () => {
    dispatch({
      type: 'SET_SEARCH_ACTIVE'
    })
  }
  const setSearchInactive = () => {
    dispatch({
      type: 'SET_SEARCH_INACTIVE'
    })
  }
  const setModalActive = () => {
    dispatch({
      type: 'SET_MODAL_ACTIVE'
    })
  }
  const setModalInactive = () => {
    dispatch({
      type: 'SET_MODAL_INACTIVE'
    })
  }
  const setMenuActive = () => {
    dispatch({
      type: 'SET_MENU_ACTIVE'
    })
  }
  const setMenuInactive = () => {
    dispatch({
      type: 'SET_MENU_INACTIVE'
    })
  }
  const setAlertActive = () => {
    dispatch({
      type: 'SET_ALERT_ACTIVE'
    })
  }
  const setAlertInactive = () => {
    dispatch({
      type: 'SET_ALERT_INACTIVE'
    })
  }
  return (
    <AppContext.Provider value={{
      state,
      setSearchActive,
      setSearchInactive,
      setModalActive,
      setModalInactive,
      setMenuActive,
      setMenuInactive,
      setAlertActive,
      setAlertInactive,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  )
}