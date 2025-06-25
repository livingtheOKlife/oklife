import { useTheme } from '@mui/material'

/**------------------------------ logo
 * 
 * @name Logo
 * @function component
 * @requires useTheme @mui/material
 * @returns the logo component for the header container
 * 
 * --------------- */

const Logo = () => {
  const { palette } = useTheme()
  return <h1 style={{
    fontSize: '1.6rem',
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: 1,
    color: palette.text.primary
  }}><em style={{
    marginRight: '5px',
    fontFamily: '"Rock Salt", sans-serif',
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: '-4px',
    lineHeight: 1,
    color: palette.primary.main
  }}>OK</em>life</h1>
}

export default Logo