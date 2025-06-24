import { Box } from '@mui/material'
import { styled } from '@mui/system'

type Type = {
  component: string
}

const Card = styled(Box)<Type> ({
  display: 'flex',
  gap: '0.5rem',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.08) 0px 2px 4px;'
})

export default Card