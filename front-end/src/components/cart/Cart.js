import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../diseños/MetaData'

const Cart = () => {
    const [quantity, setQuantity] = useState(1)

    const increaseQty = () => {
        const contador = document.querySelector('.count')
        const qty = contador.valueAsNumber + 1;
        setQuantity(qty)
    }

    const decreaseQty = () => {
        const contador = document.querySelector('.count')

        const qty = contador.valueAsNumber - 1;
        setQuantity(qty)
    }

    //Json de ejemplo
    let cartItems = [
        {
            "id": "635469bb0e29139d086f3fb9",
            "nombre": "Licencia de windows",
            "precio": 15000,
            "imagen": "./images/software/windows.png",
            "inventario": 98,
            "__v": 0
        },
        {
            "id": "6354d6a76cc2e8e8c5488807",
            "nombre": "Monitores",
            "precio": 20000,
            "imagen": "./images/hardware/monitores.png",
            "inventario": 158,
            "__v": 0
        },
        {
            "id": "6354d7606cc2e8e8c548880e",
            "nombre": "Software de video",
            "precio": 74000,
            "imagen": "./images/software/softVideo.png",
            "inventario": 208,
            "__v": 0
        },
        {
            "_id": "635b29546efce29d02445ea2",
            "nombre": "SSD",
            "precio": 740600,
            "imagen": "./images/hardware/ssd.png",
            "inventario": 2608,
            "__v": 0
        }
    ]

    cartItems = Array.from(cartItems);

    return (
        <Fragment>
            <MetaData title={'Your Cart'} />


            {cartItems.length === 0 ? <h2 className="mt-5">Su carrito esta vacio</h2> : (
                <Fragment>

                    <h2 className="mt-5">Su Carrito: <b>{cartItems.length} items</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">

                            {cartItems && cartItems.map(item => (
                                <Fragment>
                                    <hr />

                                    <div className="cart-item" key={item.nombre}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.imagen} alt={item.nombre} height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link to={`/producto/${item._id}`}>{item.nombre}</Link>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">${item.precio}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                                    <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="fa fa-trash btn btn-danger" ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>

                            ))}
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Total de la Compra</h4>
                                <hr />
                                <p>Subtotal:  <span className="order-summary-values">$350.000</span></p>
                                <p>Est. total: <span className="order-summary-values">$380.000</span></p>

                                <hr />
                                <button id="checkout_btn" className="btn btn-primary btn-block">Comprar!</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}
export default Cart