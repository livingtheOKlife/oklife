import { styled } from '@mui/system'
import { Box } from '@mui/material'

type Type = {
  component: string
}

/**------------------------------ flex between utility component
 * 
 * @name FlexBetween
 * @function component utility
 * @requires styled @mui/system
 * @requires Box @mui/material
 * @description creates a styled utility component for flex components that justify-content as space-between
 * 
 * --------------- */

const FlexBetween = styled(Box)<Type> ({
  display: 'flex',
  justifyContent: 'space-between',
})

export default FlexBetween