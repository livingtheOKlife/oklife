import { useAppContext } from '../../../hooks/useAppContext'
import { useTheme } from '@mui/material'
import { TbX } from 'react-icons/tb'

/**------------------------------ close alert
 * 
 * @name CloseAlertButton
 * @function component
 * @requires useAppContext custom hook
 * @requires useTheme @mui/material
 * @requires TbX react-icons/tb
 * @returns a button for closing the alert container
 * 
 * --------------- */

const CloseAlertButton = () => {
  const {
    setAlertInactive
  } = useAppContext()
  const { palette } = useTheme()
  return (
    <button style={{
      backgroundColor: palette.background.default
    }} onClick={() => setAlertInactive()}>
      <TbX style={{ fontSize: '20px', color: palette.text.primary }} />
    </button>
  )
}

export default CloseAlertButton