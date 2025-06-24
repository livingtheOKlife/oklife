import { useMediaQuery, useTheme } from '@mui/material'
import FlexBetween from '../shared/utils/FlexBetween'
import Copyright from '../Copyright'

/**------------------------------ footer container
 *
 * @name FooterContainer
 * @function
 * @requires react-router-dom
 * @returns footer container component
 * @description contains the copyright bar
 *
 * --------------- */

const FooterContainer = () => {
  const { palette } = useTheme()
  const darkMode = useMediaQuery('(prefers-color-scheme: dark')
  return (
    <FlexBetween component='footer' id='footer-container' style={{
      padding: '4px 8px',
      fontSize: '8px',
      backgroundColor: darkMode ? palette.background.default : palette.background.paper,
      color: darkMode ? palette.background.paper : palette.background.default
    }}>
      <Copyright />
      <span>
        All rights reserved.
      </span>
    </FlexBetween>
  )
}

export default FooterContainer