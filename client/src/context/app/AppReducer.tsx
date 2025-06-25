type PayloadType = {
  message: string,
  type: string
} | null

type StateType = {
  search: boolean,
  modal: boolean,
  menu: boolean,
  alert: boolean | PayloadType
}

type ActionType = {
  type: string,
  payload: PayloadType
}

/**------------------------------ app reducer
 *
 * @name AppReducer
 * @function
 *
 * --------------- */

const AppReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'SET_SEARCH_ACTIVE':
      return {
        ...state,
        search: true,
      }
    case 'SET_SEARCH_INACTIVE':
      return {
        ...state,
        search: false,
      }
    case 'SET_MODAL_ACTIVE':
      return {
        ...state,
        modal: true,
      }
    case 'SET_MODAL_INACTIVE':
      return {
        ...state,
        modal: false,
      }
    case 'SET_MENU_ACTIVE':
      return {
        ...state,
        menu: true,
      }
    case 'SET_MENU_INACTIVE':
      return {
        ...state,
        menu: false,
      }
    case 'SET_ALERT_ACTIVE':
      return {
        ...state,
        alert: action.payload,
      }
    case 'SET_ALERT_INACTIVE':
      return {
        ...state,
        alert: false,
      }
    default:
      return state
  }
}

export default AppReducer