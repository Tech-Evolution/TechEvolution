import React, { Fragment } from 'react'
import MetaData from '../diseños/MetaData'

export const DetalleProducts = () => {
    return (
        <Fragment>
            <MetaData title="Productos tecnologicos"></MetaData>
            <div className='row d-flex justify-content-around'>
                <div className='col-12 col-lg-5 img-fluid' id="imagen_producto"></div>
                <img src='../../images/hardware/graficas.jpg' alt='Taegeta grafica' height="450" width="450"></img>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
                <h3>Tarjeta grafica trx 3090</h3>
                <p id="product_id">Product #3253252</p>
            </div>

        </Fragment>
    )
}

