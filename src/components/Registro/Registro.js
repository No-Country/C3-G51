import React from 'react'
import './Registro.css'
import { Link } from 'react-router-dom'
const Registro = () => {
  return (
    <div className='registro'>
        <div className='registro__form'>
            <h2>CREAR CUENTA</h2>
            <span>Registrate y conocé nuestras ofertas exclusivas</span>
            <label>Nombre</label>
            <input type="text" name="nombre" placeholder='Ingresa tu nombre'></input>
            <label>Email</label>
            <input type="email" name="email" placeholder='Ingresa tu email'></input>
            <label>Contraseña</label>
            <input type="password" name="password"></input>
            <label>Confirmar contraseña</label>
            <input type="password" name="password"></input>
            <div className='registro__form--checkbox1'>
                <input type="checkbox" name="terminos"></input>
                <label>Acepto <a href="#">términos y condiciones</a></label>
            </div>
            <div className='registro__form--checkbox2'>
                <input type="checkbox" name="newsletter"></input>
                <label>Quiero subscribirme al newsletter</label>
            </div>
            <div className='registro__form--bottom'>
                <Link to="/login">CANCELAR</Link>
                <button>CREAR CUENTA</button>
            </div>
            <span>¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link></span>
        </div>
    </div>
  )
}

export default Registro