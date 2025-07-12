import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Divider, FormLabel, useTheme } from '@mui/material'
import { TbSignature } from 'react-icons/tb'
import { useAppContext } from '../hooks/useAppContext'
import { createAccountSchema, type CreateAccountSchemaType } from '../library/createAccountSchema'
import type { AuthStateType } from '../store'
import { useCreateAccountMutation } from '../api/authApiSlice'
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

/**------------------------------ create account page
 *
 * @name CreateAccountPage
 * @function
 * @route /create-account
 * @returns main container component for the create account page
 *
 * --------------- */

const CreateAccountPage = () => {
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
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)
  // ------------------------------ form handler
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm<CreateAccountSchemaType>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'all'
  })
  // ------------------------------ api mutation
  const [ createAccount, { isLoading } ] = useCreateAccountMutation()
  // ------------------------------ on submit
  const onSubmit = async () => {
    try {
      if (getValues('password') !== getValues('confirmPassword')) {
        setAlertActive('Passwords do not match', 'error')
      } else {
        const res = await createAccount({
          username: getValues('username'),
          email: getValues('email'),
          password: getValues('password')
        }).unwrap()
        dispatch(setCredentials({...res}))
        setAlertActive(`Welcome, ${getValues('username')}!`, 'success')
        navigate('/verify-account')
      }
    } catch (error:unknown) {
      if (error) {
        setAlertActive(error.data.message, 'error')
      }
    }
  }
  // ------------------------------ return
  return (
    <MainContainer page='create-account-page'>
      <FormWidget onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <h2>Welcome!</h2>
          <span style={{ fontSize: '12px' }}>Enter your details below, we'll take it from there...</span>
        </FormHeader>
        <FormControl>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>Username</FormLabel>
          <input type='text' placeholder='Choose a username' {
            ...register('username')
          } />
          {
            errors.username && <InputError error={errors.username.message} />
          }
        </FormControl>
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
        <FormControl>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>Confirm Password</FormLabel>
          <PasswordInput showPassword={showConfirmPassword} setShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}>
            <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Choose a password' {
              ...register('confirmPassword')
            } />
          </PasswordInput>
          {
            errors.confirmPassword && <InputError error={errors.confirmPassword.message} />
          }
        </FormControl>
        {
          isLoading ? <Loading type='card' />
          : <FormButton>
              <TbSignature fontSize='1.35rem' />
              Sign up
            </FormButton>
        }
        <Divider style={{ fontSize: '12px' }}>or</Divider>
        <FormFooter marginTop='0.5rem'>
          <span>Already a member?</span>
          <Link to='/sign-in' style={{ color: palette.primary.main }}>Sign in instead</Link>
        </FormFooter>
      </FormWidget>
    </MainContainer>
  )
}

export default CreateAccountPage