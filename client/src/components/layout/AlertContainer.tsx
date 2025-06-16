import { useAppContext } from '../../hooks/useAppContext'

/**------------------------------ alert container
 * 
 * @name AlertContainer
 * @requires useAppContext
 * @returns alert container component
 * @description contains the alert component
 *
 * --------------- */

const AlertContainer = () => {
  const {
    state,
  } = useAppContext()
  return state.alert === true && <aside id="alert-container">AlertContainer</aside>
}

export default AlertContainer