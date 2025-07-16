import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Divider, FormLabel, useTheme } from '@mui/material'
import { TbShieldCheckFilled } from 'react-icons/tb'
import MainContainer from '../components/layout/MainContainer'
import FormWidget from '../components/shared/forms/FormWidget'
import FormHeader from '../components/shared/forms/FormHeader'
import FormControl from '../components/shared/forms/FormControl'
import PasswordInput from '../components/shared/forms/PasswordInput'
import FormButton from '../components/shared/forms/FormButton'
import FormFooter from '../components/shared/forms/FormFooter'
import { useDispatch, useSelector } from 'react-redux'
import type { AuthStateType } from '../store'
import { useAppContext } from '../hooks/useAppContext'
import { updatePasswordSchema, type UpdatePasswordSchemaType } from '../library/updatePasswordSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUpdatePasswordMutation } from '../api/authApiSlice'
import Loading from '../components/shared/Loading'
import InputError from '../components/shared/forms/InputError'
import { setCredentials } from '../api/authSlice'

/**------------------------------ update password page
 *
 * @name UpdatePasswordPage
 * @function
 * @route /update-password
 * @returns main container component for the update password page
 *
 * --------------- */

const UpdatePasswordPage = () => {
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
  const user = userInfo.user
  // ------------------------------ context
  const { setAlertActive } = useAppContext()
  // ------------------------------ theme
  const { palette } = useTheme()
  // ------------------------------ show password
  const [ showCurrentPassword, setShowCurrentPassword ] = useState(false)
  const [ showNewPassword, setShowNewPassword ] = useState(false)
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)
  // ------------------------------ form handler
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm<UpdatePasswordSchemaType>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    mode: 'all'
  })
  // ------------------------------ api mutation
  const [ updatePassword, { isLoading } ] = useUpdatePasswordMutation()
  // ------------------------------ on submit
  const onSubmit = async () => {
    try {
      if (getValues('newPassword') !== getValues('confirmPassword')) {
        setAlertActive('Passwords do not match', 'error')
      } else {
        const res = await updatePassword({
          userId: user._id,
          currentPassword: getValues('currentPassword'),
          newPassword: getValues('newPassword')
        }).unwrap()
        dispatch(setCredentials({...res}))
        setAlertActive('Password successfully changed', 'success')
        navigate('/')
      }
    } catch (error:unknown) {
      if (error) {
        setAlertActive(error.data.message, 'error')
      }
    }
  }
  return (
    <MainContainer page='update-password-page'>
      <FormWidget onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <h2>Simple Stuff!</h2>
          <span style={{ fontSize: '12px' }}>Confirm your current password, then simply choose a new password...</span>
        </FormHeader>
        <FormControl>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>Current Password</FormLabel>
          <PasswordInput showPassword={showCurrentPassword} setShowPassword={() => setShowCurrentPassword(!showCurrentPassword)}>
            <input type={showCurrentPassword ? 'text' : 'password'} placeholder='Enter your current password' {
              ...register('currentPassword')
            } />
          </PasswordInput>
            {
              errors.currentPassword && <InputError error={errors.currentPassword.message} />
            }
        </FormControl>
        <FormControl marginTop='1rem'>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>New Password</FormLabel>
          <PasswordInput showPassword={showNewPassword} setShowPassword={() => setShowNewPassword(!showNewPassword)}>
            <input type={showNewPassword ? 'text' : 'password'} placeholder='Choose a new password' {
              ...register('newPassword')
            } />
          </PasswordInput>
            {
              errors.newPassword && <InputError error={errors.newPassword.message} />
            }
        </FormControl>
        <FormControl>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>Confirm Password</FormLabel>
          <PasswordInput showPassword={showConfirmPassword} setShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}>
            <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Confirm your new password' {
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
              Change password
            </FormButton>
        }
        <Divider>or</Divider>
        <FormFooter>
          <span>Changed your mind?</span>
          <Link to='/' style={{ color: palette.primary.main }}>Continue exploring</Link>
        </FormFooter>
      </FormWidget>
    </MainContainer>
  )
}

export default UpdatePasswordPage