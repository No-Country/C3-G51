import React from 'react'
import { Icon } from '@iconify/react';
import './Footer.css'
import { Link } from 'react-router-dom'
import MediosDePago from '../Svg/MediosDePago'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__izq'>
            <Link to="/">
                INICIO
            </Link>
            <Link to="/">
                PRODUCTOS
            </Link>
            <Link to="/">
                CONTACTO
            </Link>
            <Link to="/">
                PREGUNTAS FRECUENTES
            </Link>
        </div>
        <div className='footer__der'>
            <h2>NEWSLETTER</h2>
            <p>Subscribite para recibir novedades y ofertas especiales en tu correo</p>
            <div className='footer__der--subscribe'>
                <input type="mail" placeholder="Ingresa tu mail"></input>
                <button>SUBSCRIBIRME</button>
                <p>Puede darse de baja en cualquier momento</p>
            </div>
            <div className='footer__der--bottom'>
                <div className='footer__der--bottom--redes'>
                    <h2>SEGUINOS</h2>
                    <div className='footer__der--bottom--redes--iconos'>
                        <Link to="/">
                            <Icon icon="uil:instagram-alt" color="white" width="50" height="50" />
                        </Link>
                        <Link to="/">
                            <Icon icon="fa:facebook-square" color="white" width="40" height="40" />
                        </Link>
                        <Link to="/">
                            <Icon icon="fa6-brands:twitter-square" color="white" width="45" height="45" />
                        </Link>
                    </div>
                </div>
                <div className='footer__der--bottom--medios'>
                    <h2>MEDIOS DE PAGO</h2>
                    <MediosDePago/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer