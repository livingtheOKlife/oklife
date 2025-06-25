import { useContext } from 'react'
import { AppContext } from '../context/app/AppContext'

/**------------------------------ app context
 *
 * @name useAppContext
 * @function
 * @requires useContext react
 * @requires AppContext
 * @description custom hook for handling react context (useContext)
 *
 * --------------- */

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }
  return context
}