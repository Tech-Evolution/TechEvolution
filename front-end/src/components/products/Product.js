import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({ producto }) => {
  return (
    <div className='col-md-6 col-lg-3 my-3'>
      <div className='card p-3 rounded'>
        <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
        <div className='card-body d-flex flex-colum'>
          <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
        </div>
        <p className='card-text'>${producto.precio}</p><Link to={`/producto/${producto._id}`} id="view_btn" className='btn btn-block'>
          Ver detalle
        </Link>
      </div>
    </div>
  )
}
