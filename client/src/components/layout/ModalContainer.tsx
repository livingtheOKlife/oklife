import { useAppContext } from '../../hooks/useAppContext'

/**------------------------------ modal container
 *
 * @name ModalContainer
 * @requires ModalContext useContext
 * @returns modal container component
 * @description contains the modal component
 *
 * --------------- */

const ModalContainer = () => {
  const {
    state,
  } = useAppContext()
  return state.modal === true && <aside id="modal-container">ModalContainer</aside>
}

export default ModalContainer