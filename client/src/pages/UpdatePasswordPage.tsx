import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Divider, FormLabel, useTheme } from '@mui/material'
import { TbShieldCheckFilled } from 'react-icons/tb'
import MainContainer from '../components/layout/MainContainer'
import FormWidget from '../components/shared/forms/FormWidget'
import FormHeader from '../components/shared/forms/FormHeader'
import FormControl from '../components/shared/forms/FormControl'
import PasswordInput from '../components/shared/forms/PasswordInput'
import FormButton from '../components/shared/forms/FormButton'
import FormFooter from '../components/shared/forms/FormFooter'

/**------------------------------ update password page
 *
 * @name UpdatePasswordPage
 * @function
 * @route /update-password
 * @returns main container component for the update password page
 *
 * --------------- */

const UpdatePasswordPage = () => {
  // ------------------------------ theme
  const { palette } = useTheme()
  // ------------------------------ show password
  const [ showCurrentPassword, setShowCurrentPassword ] = useState(false)
  const [ showNewPassword, setShowNewPassword ] = useState(false)
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)
  // ------------------------------ on submit
  const onSubmit = async () => {}
  return (
    <MainContainer page='update-password-page'>
      <FormWidget onSubmit={onSubmit}>
        <FormHeader>
          <h2>Simple Stuff!</h2>
          <span style={{ fontSize: '12px' }}>Confirm your current password, then simply choose a new password...</span>
        </FormHeader>
        <FormControl>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>Current Password</FormLabel>
          <PasswordInput showPassword={showCurrentPassword} setShowPassword={() => setShowCurrentPassword(!showCurrentPassword)}>
            <input type={showCurrentPassword ? 'text' : 'password'} placeholder='Enter your current password' />
          </PasswordInput>
        </FormControl>
        <FormControl marginTop='1rem'>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>New Password</FormLabel>
          <PasswordInput showPassword={showNewPassword} setShowPassword={() => setShowNewPassword(!showNewPassword)}>
            <input type={showNewPassword ? 'text' : 'password'} placeholder='Choose a new password' />
          </PasswordInput>
        </FormControl>
        <FormControl>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>Confirm Password</FormLabel>
          <PasswordInput showPassword={showConfirmPassword} setShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}>
            <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Confirm your new password' />
          </PasswordInput>
        </FormControl>
        <FormButton>
          <TbShieldCheckFilled />
          Change password
        </FormButton>
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