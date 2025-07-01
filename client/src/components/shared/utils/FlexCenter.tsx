import { styled } from '@mui/system'
import { Box } from '@mui/material'

type Type = {
  component: string
}

/**------------------------------ flex center utility component
 * 
 * @name FlexCenter
 * @function component utility
 * @requires styled @mui/system
 * @requires Box @mui/material
 * @description creates a styled utility component for flex components that justify-content and align-items center
 * 
 * --------------- */

const FlexCenter = styled(Box)<Type> ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export default FlexCenter