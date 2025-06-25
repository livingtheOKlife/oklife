import { styled } from '@mui/system'
import { Box } from '@mui/material'

type Type = {
  component: string
}

/**------------------------------ card utility component
 * 
 * @name Card
 * @function component utility
 * @requires styled @mui/system
 * @requires Box @mui/material
 * @description creates a styled utility component for cards
 * 
 * --------------- */

const Card = styled(Box)<Type> ({
  display: 'flex',
  gap: '0.5rem',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.08) 0px 2px 4px;'
})

export default Card