import { useTheme } from '@mui/material'

type Type = {
  error: string | undefined
}

const InputError = ({error}:Type) => {
  const { palette } = useTheme()
  return (
    <span style={{
      margin: '-0.125rem 0 0.5rem 0.5rem',
      fontSize: '8px',
      fontWeight: 500,
      color: palette.wheel.red.main
    }}>{error}</span>
  )
}

export default InputError