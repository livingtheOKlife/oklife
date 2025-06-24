import { Box, useTheme } from '@mui/material'
import { TbCircleCheck, TbExclamationCircleFilled } from 'react-icons/tb'
import { useAppContext } from '../../hooks/useAppContext'
import Card from '../shared/utils/Card'
import AlertTimer from './alert/AlertTimer'
import CloseAlertButton from './alert/CloseAlertButton'

const AlertContainer = () => {
  const {
    state,
  } = useAppContext()
  const { palette } = useTheme()
  return state.alert !== false &&
    <Box component='aside' id='alert-container' position='absolute' top='4.5rem' alignSelf='center' maxWidth='80%'>
      <Card component='div' alignItems='center' padding='0.75rem 0.75rem 1.25rem 0.75rem' style={{
        backgroundColor: palette.background.default
      }}>
        {
          state.alert !== true && state.alert.type === 'success' ?
            <TbCircleCheck style={{
              fontSize: '24px',
              color: palette.wheel.green.main
            }} />
          : <TbExclamationCircleFilled style={{
              fontSize: '24px',
              color: palette.wheel.red.main
            }} />
        }
        <span style={{ margin: '0 0.25rem' }}>{state.alert !== true && state.alert.message}</span>
        <CloseAlertButton />
        <AlertTimer type={state.alert !== true && state.alert.type} />
      </Card>
    </Box>
}

export default AlertContainer