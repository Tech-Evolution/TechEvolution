import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { Carousel } from 'react-bootstrap'
import { clearErrors, getDetalle } from '../../action/actionProduct'
import MetaData from '../diseños/MetaData'


export const DetalleProducts = () => {
    const { loading, product, error } = useSelector(state => state.productDetalle)
    const { id } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        dispatch(getDetalle(id))
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    },
        [dispatch, error, id, alert])


    const increaseQty = () => {
        const contador = document.querySelector('.count')

        if (contador.valueAsNumber >= product.inventario) return;

        const qty = contador.valueAsNumber + 1;
        setQuantity(qty)
    }

    const decreaseQty = () => {
        const contador = document.querySelector('.count')

        if (contador.valueAsNumber <= 1) return;

        const qty = contador.valueAsNumber - 1;
        setQuantity(qty)
    }



    return (
        <Fragment>

            <br>
            </br>
            <br>
            </br>

            <MetaData title={product.nombre}></MetaData>
            <div className='row d-flex justify-content-around'>
                <div className='col-12 col-lg-5 img-fluid' id="imagen_producto"></div>
                <Carousel pause='hover'>
                    {product.imagen && product.imagen.map(img => (
                        <Carousel.Item key={img.public_id}>
                            <img className="d-block w-100" src={"../" + img.url} alt={product.nombre}></img>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <div className='col-12 col-lg-5 mt-5'>

                <h3>{product.nombre}</h3>
                <p id="product_id">ID del producto {product._id}</p>
                <hr />
                <p id="Precio del producto">$ {product.precio}</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                    <input type="number" className="form-control count d-inline" value={quantity} readOnly />
                    <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                </div>
                <button type="button" id="carrito_btn" className="btn btn-primary d-inline ml-4" disabled={product.inventario === 0}>Agregar al Carrito</button>
                <hr />
                <p>Estado: <span id="stock_stado" className={product.inventario > 0 ? 'greenColor' : 'redColor'}>{product.inventario > 0 ? "Existente" : "Agotado"}</span></p>
                <hr />
                <h4 className="mt-2">Descripción:</h4>
                <p>{product.descripcion}</p>
                <hr />
            </div>


        </Fragment>
    )
}

