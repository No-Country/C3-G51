import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <>    
    <div className='header'>
        <nav className='header__navbar'>
          <div className='header__navbar--div1'>
            <Link to="/">
              Productos
            </Link>
          </div>
          <div className='header__navbar--div2'>
            <Link to="/">
              ¿Cómo funciona?
            </Link>
          </div>
          <div className='header__navbar--div3'>
            <div className='header__navbar--div3--input'>
              <input type="text" placeholder='¿Qué estás buscando?'></input>
              <button>
                <Icon icon="ant-design:search-outlined" />
              </button>
            </div>
          </div>
          <div className='header__navbar--div4'>
            <Link to="/">
              INICIAR SESIÓN
            </Link>
          </div>
          <Link to="/">
            <div className='header__navbar--div5'>
                QUIERO SUBSCRIBIRME
            </div >
          </Link>              
          <div className='header__navbar--div6'>
            <Link to="/">
              <Icon icon="ic:outline-shopping-cart" />
            </Link> 
          </div>
        </nav>
        <div className='header__bienvenida'>
          <div className='header__bienvenida--top'>
            <h2>BIENVENID@</h2>
          </div>
          <div className='header__bienvenida--mid'>
            <p>La única subscripción que<br></br> te ayuda a potenciar tus <br></br> entrenamientos</p>
          </div>
          <div className='header__bienvenida--bottom'>
            <button>
              QUIERO EMPEZAR HOY
            </button>
          </div>
        </div>
    </div>
    <div className='header__bottom'>
      <div className='header__bottom--1'>
        <Icon icon="ic:outline-date-range" color="#40817a" width="52" height="58" />
        <p>Elegí la frecuencia para recibir tus pedidos</p>
      </div>
      <div className='header__bottom--2'>
        <Icon icon="mdi:truck-outline" color="#40817a" width="52" height="58" />
        <p>Envíos a todo el país</p>
      </div>
      <div className='header__bottom--3'>
        <Icon icon="codicon:home" color="#40817a" width="52" height="58" />
        <p>Recibilos en la puerta de tu casa</p>
      </div>
    </div>
    </>
  )
}

export default Header