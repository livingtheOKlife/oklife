import { Box } from '@mui/material'
import { styled } from '@mui/system'

const FormHeader = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%',
  maxWidth: '280px',
  margin: '0 auto',
  textAlign: 'center'
})

export default FormHeader