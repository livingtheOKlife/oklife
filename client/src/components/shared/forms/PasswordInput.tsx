import { TbEye, TbEyeOff } from 'react-icons/tb'

type Props = {
  showPassword: boolean
  setShowPassword: () => void
  children: React.ReactNode
}

const PasswordInput = ({showPassword, setShowPassword, children}: Props) => {
  return (
    <div className="btn-input" style={{ position: 'relative' }}>
      {children}
      <button type="button" style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        padding: '0 1rem',
        borderRadius: '0 3px 3px 0',
        fontSize: '18px'
      }} onClick={setShowPassword}>
        {
          showPassword ? <TbEyeOff /> : <TbEye />
        }
      </button>
    </div>
  )
}

export default PasswordInput