import { useTheme } from '@mui/material'

type Type = {
  error: string | undefined
}

const InputError = ({error}:Type) => {
  const { palette } = useTheme()
  return (
    <span style={{
      alignSelf: 'center',
      width: 'calc(100% - 1rem)',
      fontSize: '8px',
      fontWeight: 500,
      color: palette.wheel.red.main
    }}>{error}</span>
  )
}

export default InputError