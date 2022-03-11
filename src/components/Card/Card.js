import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({producto}) => {
  return (
    <>    
    <div className='card'>
        <div className='card__imgContainer'>
            <img src={producto.picture} alt="imagen de proteina"></img>
        </div>
        <h3>{producto.name}</h3>
        <span>${producto.price}</span>
        <div className='card__buttons'>
            <Link to="/itemdetail">
                <button>DETALLES</button>
            </Link> 
            <button>COMPRAR</button>
        </div>
    </div>    
    </>
  )
}

export default Card