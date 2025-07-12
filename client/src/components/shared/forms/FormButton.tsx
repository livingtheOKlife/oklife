import { Button, useMediaQuery, useTheme } from '@mui/material'

type Props = {
  children:React.ReactNode
}

const FormButton = ({children}:Props) => {
  const { palette } = useTheme()
  const darkMode = useMediaQuery('(prefers-color-scheme: dark')
  return (
    <Button type='submit' variant='contained' style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      padding: '0.75rem',
      margin: '1rem 0',
      fontSize: '0.85rem',
      lineHeight: 1,
      textTransform: 'none',
      backgroundColor: palette.primary.main,
      color: darkMode ? palette.background.paper : palette.background.default,
    }}>
      {children}
    </Button>
  )
}

export default FormButton