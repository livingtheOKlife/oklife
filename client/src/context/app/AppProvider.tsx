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
 * @requires AppContext
 * @requires AppReducer
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
      type: 'SET_SEARCH_ACTIVE',
      payload: null
    })
  }
  const setSearchInactive = () => {
    dispatch({
      type: 'SET_SEARCH_INACTIVE',
      payload: null
    })
  }
  const setModalActive = () => {
    dispatch({
      type: 'SET_MODAL_ACTIVE',
      payload: null
    })
  }
  const setModalInactive = () => {
    dispatch({
      type: 'SET_MODAL_INACTIVE',
      payload: null
    })
  }
  const setMenuActive = () => {
    dispatch({
      type: 'SET_MENU_ACTIVE',
      payload: null
    })
  }
  const setMenuInactive = () => {
    dispatch({
      type: 'SET_MENU_INACTIVE',
      payload: null
    })
  }
  const setAlertActive = (message:string, type:string) => {
    dispatch({
      type: 'SET_ALERT_ACTIVE',
      payload: {
        message,
        type
      }
    })
    setTimeout(() => dispatch({
      type: 'SET_ALERT_INACTIVE',
      payload: null
    }), 3640)
  }
  const setAlertInactive = () => {
    dispatch({
      type: 'SET_ALERT_INACTIVE',
      payload: null
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