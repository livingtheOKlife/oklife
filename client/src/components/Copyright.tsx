import { useTheme } from '@mui/material'
import FlexCenter from './shared/utils/FlexCenter'

function Copyright () {
  const { palette } = useTheme()
  return (
    <FlexCenter component='div' gap='4px'>
      <span id='brand' style={{
        fontFamily: '"Rock Salt", sans-serif',
        letterSpacing: 1,
        lineHeight: 1
      }}>livingthe<em style={{
        margin: '0 2px 0 -1px',
        fontSize: '7px',
        fontWeight: 600,
        letterSpacing: '-1px',
        color: palette.primary.main
      }}>OK</em>life</span>
      <span>&copy; 2025</span>
    </FlexCenter>
  )
}

export default Copyright