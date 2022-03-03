import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className='card'>
        <div className='card__imgContainer'>
            <img src={require('../../assets/protein.png')} alt="imagen de proteina"></img>
        </div>
        <h3>TITULO DEL PRODUCTO</h3>
        <span>$9099</span>
        <div className='card__buttons'>
            <Link to="/itemdetail">
                <button>DETALLES</button>
            </Link>
            <button>COMPRAR</button>
        </div>
    </div>
  )
}

export default Card