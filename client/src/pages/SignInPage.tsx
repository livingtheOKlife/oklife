import { useSelector } from 'react-redux'
import MainContainer from '../components/layout/MainContainer'
import type { AuthStateType } from '../store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**------------------------------ sign in page
 *
 * @name SignInPage
 * @function
 * @route /sign-in
 * @returns main container component for the sign in page
 *
 * --------------- */

const SignInPage = () => {
  // ------------------------------ utils
  const navigate = useNavigate()
  // ------------------------------ auth
  const { userInfo } = useSelector((state:AuthStateType) => state.auth)
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])
  return (
    <MainContainer page='sign-in-page'>
      MainContainer - Sign In Page
    </MainContainer>
  )
}

export default SignInPage