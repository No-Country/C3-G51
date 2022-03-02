import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Icon } from '@iconify/react';
import './ItemDetail.css'

const ItemDetail = () => {
  return (
    <div className='detailContainer'>
        <div className='detailContainer__izq'>
            <img src={require('../../assets/Producto.png')} alt="imagen suplemento vitaminas"></img>
        </div>
        <div className='detailContainer__der'>
            <h2 className='detailContainer__der--titulo'>TITULO</h2>
            <span className='detailContainer__der--precio'>$5600</span>
            <div className='detailContainer__der--counter'>
                <ItemCount/>                
            </div>
            <div className='detailContainer__der--envio'>
                <span>Calculá el costo de tu envío</span>
                <div>
                   <input type="text" placeholder='Ingresá tu código postal'></input>
                   <button>CALCULAR ENVÍO</button>
                </div>
                <span>No sé mi codigo postal</span>
            </div>
            <div className='detailContainer__der--metodos'>
                <div className='detailContainer__der--metodos--a'>
                  <span>Métodos de pago</span>
                  <button><Icon icon="akar-icons:plus" color="#003B32" /></button>
                </div>
                <hr></hr>
            </div>
            <div className='detailContainer__der--metodos'>
            <div className='detailContainer__der--metodos--a'>
                  <span>Métodos de pago</span>
                  <button><Icon icon="akar-icons:plus" color="#003B32" /></button>
                </div>
                <hr></hr>
            </div>
            <div className='detailContainer__der--metodos'>
            <div className='detailContainer__der--metodos--a'>
                  <span>Métodos de pago</span>
                  <button><Icon icon="akar-icons:plus" color="#003B32" /></button>
                </div>
                <hr></hr>
            </div>
        </div>
        <div className='detailContainer__bottom'>
            <h2>DESCRIPCIÓN</h2>
            <h4><u>Producto</u></h4>
            <p>Collagen Peptides</p>
            <h4><u>Marca</u></h4>
            <p>Collagen Peptides</p>
            <h4><u>Contenido Neto</u></h4>
            <p>Collagen Peptides</p>
            <h4><u>Servicio</u></h4>
            <p>Collagen Peptides</p>
            <h4><u>Servicios por envase</u></h4>
            <p>Collagen Peptides</p>
            <h4><u>Función</u></h4>
            <p>Collagen Peptides</p>
            <h4><u>Modo de uso</u></h4>
            <p>Collagen Peptides</p>
            
        </div>
    </div>
  )
}

export default ItemDetail