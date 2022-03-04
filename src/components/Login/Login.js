import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

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
            <div className='login__form--bottom'>
                <Link to="/">VOLVER</Link>
                <button>INICIAR SESIÓN</button>
            </div>
            <span>¿No tienes una cuenta? <Link to="/registro">Ingresa aquí</Link></span>
        </div>
    </div>
  )
}

export default Login