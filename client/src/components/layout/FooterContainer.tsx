import FlexBetween from '../shared/utils/FlexBetween'
import Copyright from '../Copyright'

/**------------------------------ footer container
 *
 * @name FooterContainer
 * @function
 * @requires useTheme @mui/material
 * @requires useMediaQuery @mui/material
 * @requires FlexBetween utility component
 * @requires Copyright component
 * @returns footer container component
 * @description contains the copyright bar
 *
 * --------------- */

const FooterContainer = () => {
  return (
    <FlexBetween component='footer' id='footer-container' style={{
      padding: '4px 8px',
      fontSize: '8px',
      backgroundColor: 'hsl(210, 100%, 4%)',
      color: 'hsl(210, 0%, 98%)'
    }}>
      <Copyright />
      <span>
        All rights reserved.
      </span>
    </FlexBetween>
  )
}

export default FooterContainer