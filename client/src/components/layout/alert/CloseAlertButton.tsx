import { useAppContext } from '../../../hooks/useAppContext'
import { TbX } from 'react-icons/tb'
import { useTheme } from '@mui/material'

function CloseAlertButton() {
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