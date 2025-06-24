import { useTheme } from '@mui/material'

type Props = {
  type: boolean | string
}

const AlertTimer = ({type}:Props) => {
  const { palette } = useTheme()
  return (
    <div className="alert-timer" style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '0.5rem',
      backgroundColor: 'rgb(0, 0, 0, 0.04)'
    }}>
      <div className="bar" style={{ 
        height: '100%',
        width: '100%',
        backgroundColor: type === 'success' ? palette.wheel.green.main : palette.wheel.red.main,
        animation: 'alert-timer 3s forwards linear',
        animationDelay: '0.32s'
       }}></div>
    </div>
  )
}

export default AlertTimer