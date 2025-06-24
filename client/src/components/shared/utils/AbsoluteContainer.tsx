import { Box } from '@mui/material'
import { styled } from '@mui/system'

type Type = {
  component: string
}

const AbsoluteContainer = styled(Box)<Type> ({
  position: 'absolute',
  top: '3.75rem',
  left: '0',
  right: '0'
})

export default AbsoluteContainer