import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Divider, FormLabel, useTheme } from '@mui/material'
import { TbSignature } from 'react-icons/tb'
import { useAppContext } from '../hooks/useAppContext'
import { signInSchema, type SignInSchemaType } from '../library/signInSchema'
import type { AuthStateType } from '../store'
import { useSignInMutation } from '../api/authApiSlice'
import { setCredentials } from '../api/authSlice'
import MainContainer from '../components/layout/MainContainer'
import FormWidget from '../components/shared/forms/FormWidget'
import FormHeader from '../components/shared/forms/FormHeader'
import FormControl from '../components/shared/forms/FormControl'
import PasswordInput from '../components/shared/forms/PasswordInput'
import FormButton from '../components/shared/forms/FormButton'
import FormFooter from '../components/shared/forms/FormFooter'
import InputError from '../components/shared/forms/InputError'
import Loading from '../components/shared/Loading'

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
  const dispatch = useDispatch()
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
  // ------------------------------ show password
  const [ showPassword, setShowPassword ] = useState(false)
  // ------------------------------ form handler
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'all'
  })
  // ------------------------------ api mutation
  const [ signIn, { isLoading } ] = useSignInMutation()
  // ------------------------------ on submit
  const onSubmit = async () => {
    try {
      const res = await signIn({
        email: getValues('email'),
        password: getValues('password')
      }).unwrap()
      dispatch(setCredentials(res))
      setAlertActive(`Welcome back, ${res.user.username}!`, 'success')
      navigate('/')
    } catch (error:unknown) {
      if (error) {
        setAlertActive(error.data.message, 'error')
      }
    }
  }
  // ------------------------------ return
  return (
    <MainContainer page='sign-in-page'>
      <FormWidget onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <h2>Welcome!</h2>
          <span style={{ fontSize: '12px' }}>Enter your details below, we'll take it from there...</span>
        </FormHeader>
        <FormControl>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>Email</FormLabel>
          <input type='email' placeholder='Enter your email address' {
            ...register('email')
          } />
          {
            errors.email && <InputError error={errors.email.message} />
          }
        </FormControl>
        <FormControl>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>Password</FormLabel>
          <PasswordInput showPassword={showPassword} setShowPassword={() => setShowPassword(!showPassword)}>
            <input type={showPassword ? 'text' : 'password'} placeholder='Choose a password' {
              ...register('password')
            } />
          </PasswordInput>
          {
            errors.password && <InputError error={errors.password.message} />
          }
        </FormControl>
        <Link to='/forgot-password' style={{ alignSelf: 'center', marginTop: '0.5rem', color: palette.primary.main }}>Forgotten password?</Link>
        {
          isLoading ? <Loading type='card' />
          : <FormButton>
              <TbSignature fontSize='1.35rem' />
              Sign in
            </FormButton>
        }
        <Divider style={{ fontSize: '12px' }}>or</Divider>
        <FormFooter marginTop='0.5rem'>
          <span>You don't have an account with us?</span>
          <Link to='/create-account' style={{ color: palette.primary.main }}>Sign up instead</Link>
        </FormFooter>
      </FormWidget>
    </MainContainer>
  )
}

export default SignInPage