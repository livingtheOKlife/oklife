import { Divider, FormControl, FormLabel, useTheme } from '@mui/material'
import MainContainer from '../components/layout/MainContainer'
import FormHeader from '../components/shared/forms/FormHeader'
import FormWidget from '../components/shared/forms/FormWidget'
import FormButton from '../components/shared/forms/FormButton'
import { TbMailFilled } from 'react-icons/tb'
import FormFooter from '../components/shared/forms/FormFooter'
import { Link } from 'react-router-dom'

/**------------------------------ forgot password page
 *
 * @name ForgotPasswordPage
 * @function
 * @route /forgot-password
 * @returns main container component for the forgotten password page
 *
 * --------------- */

const ForgotPasswordPage = () => {
  const { palette } = useTheme()
  const onSubmit = () => {}
  return (
    <MainContainer page='forgot-password-page'>
      <FormWidget onSubmit={onSubmit}>
        <FormHeader>
          <h2>Don't Panic!</h2>
          <span style={{ fontSize: '12px' }}>Enter your email below, we will take it from there...</span>
        </FormHeader>
        <FormControl>
          <FormLabel style={{ marginLeft: '0.5rem', color: palette.text.primary }}>Email</FormLabel>
          <input type="email" placeholder='Enter your email address' />
        </FormControl>
        <FormButton>
          <TbMailFilled />
          Send help
        </FormButton>
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