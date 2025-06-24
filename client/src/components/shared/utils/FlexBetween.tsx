import { Box } from '@mui/material'
import { styled } from '@mui/system'

type Type = {
  component: string
}

const FlexBetween = styled(Box)<Type> ({
  display: 'flex',
  justifyContent: 'space-between',
})

export default FlexBetween