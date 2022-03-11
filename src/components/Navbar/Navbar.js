import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <nav className='header__navbar'>
          <div className='header__navbar--div1'>
            <Link to="/productos">
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
            <Link to="/login">
              INICIAR SESIÓN
            </Link>
          </div>
          <Link to="/" className='header__navbar--subs'>
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
  )
}

export default Navbar