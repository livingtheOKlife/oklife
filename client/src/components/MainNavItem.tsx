import { useTheme } from '@mui/material'

type Props = {
  onClick: () => void,
  children: React.ReactNode
}

/**------------------------------ main navigation items
 * 
 * @name MainNavItem
 * @function component
 * @requires useTheme @mui/material
 * @returns a button for the main navigation bar in the header container
 * 
 * --------------- */

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