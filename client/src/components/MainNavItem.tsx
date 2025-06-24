import { useTheme } from '@mui/material'

type Props = {
  onClick: () => void,
  children: React.ReactNode
}

const MainNavItem = ({onClick, children}: Props) => {
  const { palette } = useTheme()
  return (
    <li style={{
      padding: '0.45rem',
      color: palette.text.primary,
      cursor: 'pointer'
    }} onClick={onClick}>
      {children}
    </li>
  )
}

export default MainNavItem