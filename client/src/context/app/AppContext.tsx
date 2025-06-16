import React, { createContext } from 'react'

type AppType = {
  search: boolean
  modal: boolean
  menu: boolean
  alert: boolean
}

type ActionType = {
  type: string
}

type ContextType = {
  state: AppType
  setSearchActive: () => void
  setSearchInactive: () => void
  setModalActive: () => void
  setModalInactive: () => void
  setMenuActive: () => void
  setMenuInactive: () => void
  setAlertActive: () => void
  setAlertInactive: () => void
  dispatch: React.ActionDispatch<[action: ActionType]>
}

/**------------------------------ app context
 *
 * @name AppContext
 * @function
 *
 * --------------- */

export const AppContext = createContext<ContextType | null>(null)