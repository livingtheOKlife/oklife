import { useEffect, useRef, useState } from 'react'
import MainContainer from '../components/layout/MainContainer'
import FormControl from '../components/shared/forms/FormControl'
import FormHeader from '../components/shared/forms/FormHeader'
import FormWidget from '../components/shared/forms/FormWidget'
import FormButton from '../components/shared/forms/FormButton'
import { TbShieldCheckFilled } from 'react-icons/tb'
import { Divider, useTheme } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { AuthStateType } from '../store'
import { useAppContext } from '../hooks/useAppContext'
import { setCredentials } from '../api/authSlice'
import { useResendVerificationMutation, useVerifyAccountMutation } from '../api/authApiSlice'
import FormFooter from '../components/shared/forms/FormFooter'

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
    if (!userInfo || userInfo.user.isVerified) {
      navigate('/')
    }
  }, [navigate, userInfo])
  // ------------------------------ context
  const { setAlertActive } = useAppContext()
  // ------------------------------ theme
  const { palette } = useTheme()
  // ------------------------------ code
  const [ code, setCode ] = useState(['', '', '', '', '', '', ])
  // ------------------------------ input refs
  const inputRefs = useRef([])
  // ------------------------------ on change
  const onChange = (i:number, value:string) => {
    const newCode = [...code]
		if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("")
			for (let i = 0; i < 6; i++) {
				newCode[i] = pastedCode[i] || ""
			}
			setCode(newCode)
			const lastFilledIndex = newCode.findLastIndex((digit:string) => digit !== "")
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5
			inputRefs.current[focusIndex].focus()
		} else {
      newCode[i] = value
			setCode(newCode)
			if (value && i < 5) {
        inputRefs.current[i + 1].focus()
			}
		}
	}
  // ------------------------------ on key down
  const onKeyDown = (i, e) => {
		if (e.key === "Backspace" && !code[i] && i > 0) {
			inputRefs.current[i - 1].focus()
		}
	}
  // ------------------------------ resend verification mutation
  const [ resendVerification ] = useResendVerificationMutation()
  // ------------------------------ on submit
  const onResend = async (e) => {
    e.preventDefault()
    try {
      const res = await resendVerification({ email: userInfo.user.email }).unwrap()
      dispatch(setCredentials({...res}))
      setAlertActive('A new code has been sent to you', 'success')
    } catch (error:unknown) {
      if (error) {
        setAlertActive(error.data.message, 'error')
      }
    }
  }
  // ------------------------------ account verification mutation
  const [ verifyAccount, { isLoading } ] = useVerifyAccountMutation()
  // ------------------------------ on submit
  const onSubmit = async (e) => {
    e.preventDefault()
		const token = code.join("")
		try {
			const res = await verifyAccount({ email: userInfo.user.email, token }).unwrap()
			dispatch(setCredentials({...res}))
			setAlertActive('Email verified successfully', 'success')
			navigate("/")
		} catch (error:unknown) {
			if (error) {
        setAlertActive(error.data.message, 'error')
      }
		}
  }
  // ------------------------------ auto submit
  useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			onSubmit(new Event("submit"));
		}
	}, [code]);
  // ------------------------------ return
  return (
    <MainContainer page='verify-account-page'>
      <FormWidget onSubmit={onSubmit}>
        <FormHeader>
          <h2>Account Verification</h2>
          <span style={{ fontSize: '12px' }}>Enter your code below to verify your email address...</span>
        </FormHeader>
        <FormControl style={{ flexDirection: 'row' }}>
          {
						code.map((digit, i) => (
							<input
								key={i}
								ref={(el) => (inputRefs.current[i] = el)}
								maxLength='6'
								value={digit}
                style={{ display: 'flex', justifyContent: 'center', fontSize: '24px' }}
								onChange={(e) => onChange(i, e.target.value)}
								onKeyDown={(e) => onKeyDown(i, e)}
							/>
						))
					}
        </FormControl>
        <FormButton>
          <TbShieldCheckFilled />
          Verify account
        </FormButton>
        <Link to='/' style={{ alignSelf: 'center', marginBottom: '0.25rem', color: palette.primary.main }}>Skip for now</Link>
        <Divider>or</Divider>
        <FormFooter>
          <span>You didn't receive an email from us?</span>
          <Link to='/verify-account' style={{ color: palette.primary.main }} onClick={onResend}>Resend code</Link>
        </FormFooter>
      </FormWidget>
    </MainContainer>
  )
}

export default VerifyAccountPage