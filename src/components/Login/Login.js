import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='Login'>
        <div className='Login__inputs'>
            <h2>INICIAR SESIÓN</h2>
            <span>Bienvenido, nos alegra que hayas vuelto!</span>
            <label>Email</label>
            <input type="email" name="email" placeholder='Ingresa tu email'></input>
            <label>Contraseña</label>
            <input type="password" name="password"></input>
            <span>¿Olvidaste tu contraseña?</span>
            <button>INICIAR SESIÓN</button>
            <span>¿No tienes una cuenta? Ingresa aquí</span>
        </div>
    </div>
  )
}

export default Login