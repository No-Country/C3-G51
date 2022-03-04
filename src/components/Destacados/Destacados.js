import React from 'react'
import './Destacados.css'
import Card from '../Card/Card'

const Destacados = () => {
  return (
    <div className='destacados'>
        <h1>PRODUCTOS DESTACADOS</h1>
        <div className='destacados__cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Destacados