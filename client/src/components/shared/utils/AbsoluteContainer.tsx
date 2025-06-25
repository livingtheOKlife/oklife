import { styled } from '@mui/system'
import { Box } from '@mui/material'

type Type = {
  component: string
}

/**------------------------------ absolute container utility component
 * 
 * @name AbsoluteContainer
 * @function component utility
 * @requires styled @mui/system
 * @requires Box @mui/material
 * @description creates a styled utility component for app context components
 * 
 * --------------- */

const AbsoluteContainer = styled(Box)<Type> ({
  position: 'absolute',
  top: '3.75rem',
  left: '0',
  right: '0'
})

export default AbsoluteContainer