import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Productos from '../Productos/Productos'
import './ProductosContainer.css'

const ProductosContainer = () => {
  return (
    <>
    <Navbar/>
    <div className='ProductosContainer'>
        <div className='ProductosContainer__nav'>
          <span>Ordenar por:</span>
          <Link to="/">Marca</Link>
          <Link to="/">Precio: Menor a mayor</Link>
          <Link to="/">Precio: Mayor a menor</Link>
          <span>Categorías:</span>
          <Link to="/">Fat burner</Link>
          <Link to="/">Incrementador de masa</Link>
          <Link to="/">Proteína</Link>         
        </div>
        <Productos/>
    </div>
    </>
  )
}

export default ProductosContainer