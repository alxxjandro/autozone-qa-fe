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
/* TODO
 *  Agregar validación de credenciales (mocked)
 *  Crear conexión con backend, Hook, model?, Error, consumir endpoint de login y servicio de autenticación
 *  Agregar una animación de espera en lo que verifica credenciales
 *  Agregar un mensaje de error en caso de credenciales incorrectas
 *  Agregar un mensaje de éxito en caso de credenciales correctas
 *  Agregar pruebas unitarias para el formulario de login
 *  Agregar pruebas unitarias para archivo de validación de credenciales
 *  Cambiar la ruta de home a login como ruta principal
 *  COULD: verificar por SQLi
 *  COULD: agregar animación de transición al verificar credenciales
 */
