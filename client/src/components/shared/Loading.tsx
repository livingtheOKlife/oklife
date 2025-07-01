import { useTheme } from '@mui/material'

type Type = {
  type: string
}

const Loading = ({type}:Type) => {
  const { palette } = useTheme()
  return (
    <div style={{ 
      alignSelf: 'center',
      width: 'auto',
      margin: '1rem 0'
     }}>
      <div className='spinner' style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '2.3rem',
        width: '2.3rem',
        borderRadius: '50%',
        backgroundImage: `conic-gradient(${palette.primary.main} 33%, ${type === 'card' ? palette.card.light : palette.background.default} 66% 100%)`,
        animation: 'spinner 0.96s infinite linear'
      }}>
        <div style={{
            position: 'absolute',
            top: '0',
            left: 'calc(50% - 3px)',
            height: '6px',
            width: '6px',
            borderRadius: '50%',
            backgroundColor: palette.primary.main
          }}></div>
        <div style={{      
            height: 'calc(100% - 12px)',
            width: 'calc(100% - 12px)',
            borderRadius: '50%',
            backgroundColor: type === 'card' ? palette.card.light : palette.background.default
          }}></div>
      </div>
     </div>
  )
}

export default Loading