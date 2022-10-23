import React, { Fragment, useEffect } from 'react'
import MetaData from './diseños/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../action/actionProduct'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export const Home = () => {



    const { loading, productos, error } = useSelector(state => state.products)
    const alert = useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProduct());
        alert.success("✨💻✨")
    }, [dispatch])


    return (
        <Fragment>

            <div class="three-dimensions-card">

                {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (

                    <Fragment>

                        <div class="three-dimensions-card">
                            <MetaData title="Evolucionando contigo"></MetaData>

                            <br></br>
                            <br></br>


                            <h2 id='new_productos'>Nuevos productos</h2>


                            <section id="product" className='container mt-5'>
                                {/*Producto 1*/}
                                <div className='row'>
                                    {productos && productos.map(producto => (
                                        <div key={producto._id} className='col-md-6 col-lg-3 my-3'>
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
                                    ))}


                                </div>
                            </section>
                        </div>


                    </Fragment>
                )}

            </div>






        </Fragment>
    )
}

export default Home