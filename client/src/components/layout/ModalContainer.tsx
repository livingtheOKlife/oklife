import { useAppContext } from '../../hooks/useAppContext'
import AbsoluteContainer from '../shared/utils/AbsoluteContainer'

/**------------------------------ modal container
 *
 * @name ModalContainer
 * @requires useAppContext custom hook
 * @requires AbsoluteContainer utility component
 * @returns modal container component
 * @description contains the modal component
 *
 * --------------- */

const ModalContainer = () => {
  const {
    state,
  } = useAppContext()
  return state.modal === true && 
    <AbsoluteContainer component='aside' id='modal-container' bottom='18px' padding='0.5rem 1rem 1.5rem 1rem'>
      ModalContainer
    </AbsoluteContainer>
}

export default ModalContainer