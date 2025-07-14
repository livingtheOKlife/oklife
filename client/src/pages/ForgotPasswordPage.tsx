import { Divider, FormControl, FormLabel, useTheme } from '@mui/material'
import MainContainer from '../components/layout/MainContainer'
import FormHeader from '../components/shared/forms/FormHeader'
import FormWidget from '../components/shared/forms/FormWidget'
import FormButton from '../components/shared/forms/FormButton'
import { TbMailFilled } from 'react-icons/tb'
import FormFooter from '../components/shared/forms/FormFooter'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { AuthStateType } from '../store'
import { useEffect } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import { useForm } from 'react-hook-form'
import { useForgotPasswordMutation } from '../api/authApiSlice'
import { forgotPasswordSchema, type ForgotPasswordSchemaType } from '../library/forgotPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Loading from '../components/shared/Loading'
import InputError from '../components/shared/forms/InputError'

/**------------------------------ forgot password page
 *
 * @name ForgotPasswordPage
 * @function
 * @route /forgot-password
 * @returns main container component for the forgotten password page
 *
 * --------------- */

const ForgotPasswordPage = () => {
  // ------------------------------ utils
  const navigate = useNavigate()
  // ------------------------------ auth
  const { userInfo } = useSelector((state:AuthStateType) => state.auth)
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])
  // ------------------------------ context
  const { setAlertActive } = useAppContext()
  // ------------------------------ theme
  const { palette } = useTheme()
  // ------------------------------ form handler
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    },
    mode: 'all'
  })
  // ------------------------------ api mutation
  const [ forgotPassword, { isLoading } ] = useForgotPasswordMutation()
  // ------------------------------ on submit
  const onSubmit = async () => {
    try {
      await forgotPassword({ email: getValues('email') }).unwrap()
      setAlertActive('A password reset link has been sent to you', 'success')
      navigate('/')
    } catch (error:unknown) {
      if (error) {
        setAlertActive(error.data.message, 'error')
      }
    }
  }
  return (
    <MainContainer page='forgot-password-page'>
      <FormWidget onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <h2>Don't Panic!</h2>
          <span style={{ fontSize: '12px' }}>Enter your email below, we will take it from there...</span>
        </FormHeader>
        <FormControl>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>Email</FormLabel>
          <input type="email" placeholder='Enter your email address' {
            ...register('email')
          } />
          {
            errors.email && <InputError error={errors.email.message} />
          }
        </FormControl>
        {
          isLoading ? <Loading type='card' />
          : <FormButton>
              <TbMailFilled />
              Send help
            </FormButton>
        }
        <Divider>or</Divider>
        <FormFooter>
          <span>You remember now?</span>
          <Link to='/sign-in' style={{ color: palette.primary.main }}>Sign in instead</Link>
        </FormFooter>
      </FormWidget>
    </MainContainer>
  )
}

export default ForgotPasswordPage