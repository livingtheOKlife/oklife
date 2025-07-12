import { useEffect, useState } from 'react'
import MainContainer from '../components/layout/MainContainer'
import FormControl from '../components/shared/forms/FormControl'
import FormHeader from '../components/shared/forms/FormHeader'
import FormWidget from '../components/shared/forms/FormWidget'
import FormButton from '../components/shared/forms/FormButton'
import { TbShieldCheckFilled } from 'react-icons/tb'
import { useTheme } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { AuthStateType } from '../store'
import { useAppContext } from '../hooks/useAppContext'

/**------------------------------ verify account page
 *
 * @name VerifyAccountPage
 * @function
 * @route /verify-account
 * @returns main container component for the verify account page
 *
 * --------------- */

const VerifyAccountPage = () => {
  // ------------------------------ utils
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // ------------------------------ auth
  const { userInfo } = useSelector((state:AuthStateType) => state.auth)
  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])
  // ------------------------------ context
  const { setAlertActive } = useAppContext()
  // ------------------------------ theme
  const { palette } = useTheme()
  // ------------------------------ code
  const [ code, setCode ] = useState(['', '', '', '', '', '', ])
  // ------------------------------ on submit
  const onSubmit = async () => {}
  // ------------------------------ return
  return (
    <MainContainer page='verify-account-page'>
      <FormWidget onSubmit={onSubmit}>
        <FormHeader>
          <h2>Account Verification</h2>
          <span style={{ fontSize: '12px' }}>Enter your code below to verify your email address...</span>
        </FormHeader>
        <FormControl style={{ flexDirection: 'row', gap: '0.5rem' }}>
          {
						code.map((i) => (
							<input
								key={i}
                style={{ display: 'flex', justifyContent: 'center', fontSize: '24px' }}
							/>
						))
					}
        </FormControl>
        <FormButton>
          <TbShieldCheckFilled />
          Verify account
        </FormButton>
        <Link to='/' style={{ alignSelf: 'center', marginBottom: '0.25rem', color: palette.primary.main }}>Skip for now</Link>
      </FormWidget>
    </MainContainer>
  )
}

export default VerifyAccountPage