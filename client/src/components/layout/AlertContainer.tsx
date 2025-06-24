import { Box } from '@mui/material'
import { useAppContext } from '../../hooks/useAppContext'

const AlertContainer = () => {
  const {
    state,
  } = useAppContext()
  return state.alert === true &&
    <Box component='aside' id='alert-container' position='absolute' top='4.5rem' alignSelf='center' maxWidth='80%'>AlertContainer</Box>
}

export default AlertContainer