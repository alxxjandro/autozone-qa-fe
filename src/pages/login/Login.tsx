/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */
import './Login.css'
import { Overlay } from '@mantine/core'
import AZ_bg from '../../assets/AZ_bg.svg'
import { LoginModal } from './LoginModal'

export function Login() {
  return (
    <>
      <div className="container">
        <img src={AZ_bg} alt="Autozone Background" className="responsive-img" />
        {<Overlay color="#1A1A1F" backgroundOpacity={0.5} />}
        <LoginModal data-testid="login-modal-rendered" /* TODO: alinear modal a la izquierda */ />
      </div>
    </>
  )
}
