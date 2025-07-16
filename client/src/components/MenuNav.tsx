import { useDispatch, useSelector } from 'react-redux'
import { useSignOutMutation } from '../api/authApiSlice'
import FlexBetween from './shared/utils/FlexBetween'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext'
import { clearCredentials } from '../api/authSlice'
import { Box, Button, styled, useMediaQuery, useTheme } from '@mui/material'
import Loading from './shared/Loading'
import type { AuthStateType } from '../store'

const MenuNavItem = styled(Box)(({ theme }) => ({
  padding: '0.75rem',
  border: `1px solid ${theme.palette.grey[700]}`,
  borderRadius: '4px',
  textAlign: 'center',
  lineHeight: 1,
  cursor: 'pointer',
  transition: 'all 0.08s ease-in-out'
}))

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
  const { userInfo } = useSelector((state:AuthStateType) => state.auth)
  const user = userInfo.user
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
        <MenuNavItem sx={{
          '&:hover': {
            border: `1px solid ${palette.primary.main}`,
            backgroundColor: palette.primary.main,
            color: darkMode ? palette.background.paper : palette.background.default,
          }
        }} onClick={() => {
          navigate('/update-password')
          setMenuInactive()
        }}>Update Password</MenuNavItem>
        {
          !user.isVerified && <MenuNavItem sx={{
            '&:hover': {
              border: `1px solid ${palette.primary.main}`,
              backgroundColor: palette.primary.main,
              color: darkMode ? palette.background.paper : palette.background.default,
            }
          }} onClick={() => {
            navigate('/verify-account')
            setMenuInactive()
          }}>Verify Account</MenuNavItem>
        }
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