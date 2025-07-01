import { useDispatch } from 'react-redux'
import { useSignOutMutation } from '../api/authApiSlice'
import FlexBetween from './shared/utils/FlexBetween'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext'
import { clearCredentials } from '../api/authSlice'
import { Button, useMediaQuery, useTheme } from '@mui/material'
import Loading from './shared/Loading'

/**------------------------------ menu navigation panel
 * 
 * @name MenuNav
 * @function component
 * @requires FlexCenter utility component
 * @returns the menu navigation panel for the menu container
 * 
 * --------------- */

const MenuNav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { palette } = useTheme()
  const darkMode = useMediaQuery('(prefers-color-scheme: dark')
  const { setMenuInactive, setAlertActive } = useAppContext()
  const [ signOut, { isLoading } ] = useSignOutMutation()
  const logoutHandler = async () => {
    try {
      await signOut({}).unwrap()
      dispatch(clearCredentials({}))
      setMenuInactive()
      navigate('/')
    } catch (error:unknown) {
      if (error) {
        setAlertActive(error.data.message, 'error')
      }
    }
  }
  return (
    <FlexBetween component='nav' id='menu-nav' flexDirection='column' height='100%'>
      <ul style={{ height: '100%', width: '100%' }}>
        <li>MenuContainer - Menu Nav Item</li>
      </ul>
      {
        isLoading ? <Loading type='' />
        : <Button type='button' variant='contained' style={{
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
          }} onClick={logoutHandler}>
            Log out
          </Button>
      }
    </FlexBetween>
  )
}

export default MenuNav