import { Box } from '@mui/material'
import { TbExclamationCircleFilled, TbX } from 'react-icons/tb'
import { useAppContext } from '../../hooks/useAppContext'
import Card from '../shared/utils/Card'
import AlertTimer from './alert/AlertTimer'

const AlertContainer = () => {
  const {
    state,
    setAlertInactive
  } = useAppContext()
  return state.alert === true &&
    <Box component='aside' id='alert-container' position='absolute' top='4.5rem' alignSelf='center' maxWidth='80%'>
      <Card component='div' alignItems='center' padding='0.75rem 0.75rem 1.25rem 0.75rem'>
        <TbExclamationCircleFilled />
          <span>AlertContainer</span>
          <button onClick={() => setAlertInactive()}>
            <TbX />
          </button>
          <AlertTimer />
      </Card>
    </Box>
}

export default AlertContainer