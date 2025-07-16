import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormLabel, useTheme } from '@mui/material'
import { TbShieldCheckFilled } from 'react-icons/tb'
import { useAppContext } from '../hooks/useAppContext'
import { resetPasswordSchema, type ResetPasswordSchemaType } from '../library/resetPasswordSchema'
import type { AuthStateType } from '../store'
import { useResetPasswordMutation } from '../api/authApiSlice'
import MainContainer from '../components/layout/MainContainer'
import FormWidget from '../components/shared/forms/FormWidget'
import FormHeader from '../components/shared/forms/FormHeader'
import FormControl from '../components/shared/forms/FormControl'
import PasswordInput from '../components/shared/forms/PasswordInput'
import FormButton from '../components/shared/forms/FormButton'
import InputError from '../components/shared/forms/InputError'
import Loading from '../components/shared/Loading'

/**------------------------------ reset password page
 *
 * @name ResetPasswordPage
 * @function
 * @route /reset-password/:token
 * @returns main container component for the reset password page
 *
 * --------------- */

const ResetPasswordPage = () => {
  // ------------------------------ utils
  const { token } = useParams()
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
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: ''
    },
    mode: 'all'
  })
  // ------------------------------ api mutation
  const [ resetPassword, { isLoading } ] = useResetPasswordMutation()
  // ------------------------------ on submit
  const onSubmit = async () => {
    try {
      if (getValues('password') !== getValues('confirmPassword')) {
        setAlertActive('Passwords do not match', 'error')
      } else {
        await resetPassword({ token: token, password: getValues('password') }).unwrap()
        setAlertActive('Your password was updated successfully', 'success')
        navigate('/')
      }
    } catch (error:unknown) {
      if (error) {
        setAlertActive(error.data.message, 'error')
      }
    }
  }
  // ------------------------------ return
  return (
    <MainContainer page='reset-password-page'>
      <FormWidget onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <h2>Nearly There!</h2>
          <span style={{ fontSize: '12px' }}>Enter your new password below...</span>
        </FormHeader>
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
              <TbShieldCheckFilled />
              Reset password
            </FormButton>
        }
      </FormWidget>
    </MainContainer>
  )
}

export default ResetPasswordPage