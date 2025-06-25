import React, { createContext } from 'react'

type AlertType = {
  message: string,
  type: string
}

type AppType = {
  search: boolean
  modal: boolean
  menu: boolean
  alert: boolean | AlertType | null
}

type PayloadType = {
  message: string,
  type: string
} | null

type ActionType = {
  type: string
  payload: PayloadType
}

type ContextType = {
  state: AppType
  setSearchActive: () => void
  setSearchInactive: () => void
  setModalActive: () => void
  setModalInactive: () => void
  setMenuActive: () => void
  setMenuInactive: () => void
  setAlertActive: (message:string, type: string) => void
  setAlertInactive: () => void
  dispatch: React.ActionDispatch<[action: ActionType]>
}

/**------------------------------ app context
 *
 * @name AppContext
 * @function
 * @requires createContext react
 *
 * --------------- */

export const AppContext = createContext<ContextType | null>(null)