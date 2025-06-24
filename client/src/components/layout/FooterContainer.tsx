import FlexBetween from '../shared/utils/FlexBetween'
import FlexCenter from '../shared/utils/FlexCenter'

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
  return (
    <FlexBetween component='footer' id='footer-container' style={{ padding: '4px 8px' }}>
      <FlexCenter component='div' gap='4px'>
        <span id='brand'>livingthe<em>OK</em>life</span>
        <span>&copy; 2025</span>
      </FlexCenter>
      <span>
        All rights reserved.
      </span>
    </FlexBetween>
  )
}

export default FooterContainer