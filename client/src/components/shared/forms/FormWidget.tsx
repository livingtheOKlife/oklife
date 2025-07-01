import Card from '../utils/Card'

type Props = {
  onSubmit: () => void
  children: React.ReactNode
}

const FormWidget = ({onSubmit, children}: Props) => {
  return (
    <Card component='form' className="form-widget" style={{
      flexDirection: 'column',
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '1.5rem 1rem 2rem 1rem',
    }} onSubmit={onSubmit}>
      {children}
    </Card>
  )
}

export default FormWidget