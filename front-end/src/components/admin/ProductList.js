import React, { Fragment } from 'react'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../diseños/MetaData'
import { useAlert } from 'react-alert'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { getProduct } from '../../action/actionProduct'
//import Sidebar from './Sidebar'
import Sidebar from './Sidebar'

const ProductList = () => {



  const { loading, productos, error } = useSelector(state => state.products)
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }

    dispatch(getProduct());

  }, [dispatch])


  const setProducts = () => {
    const data = {
      columns: [
        {
          label: 'Nombre',
          field: 'nombre',
          sort: 'asc'
        },
        {
          label: 'Precio',
          field: 'precio',
          sort: 'asc'
        },
        {
          label: 'Inventario',
          field: 'inventario',
          sort: 'asc'
        },
        {
          label: 'Acciones',
          field: 'actions',
        }
      ],
      rows: []
    }

    productos.forEach(product => {
      data.rows.push({
        nombre: product.nombre,
        precio: `$${product.precio}`,
        inventario: product.inventario,
        actions: <Fragment>
          <Link to={`/producto/${product._id}`} className="btn btn-primary py-1 px-2">
            <i className="fa fa-eye"></i>
          </Link><Link to="/" className="btn btn-warning py-1 px-2">
            <i class="fa fa-pencil"></i>
          </Link>

          <Link to="/" className="btn btn-danger py-1 px-2">
            <i className="fa fa-trash"></i>
          </Link>


        </Fragment>
      })
    })

    return data;
  }

  return (

    <Fragment>
      <Sidebar />
      <MetaData title={'All Products'} />
      <div className="row">
        <div className="col-12 col-md-12">
          <Fragment>
            <h1 className="my-5">Productos Registrados</h1>

            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
              <MDBDataTable
                data={setProducts()}
                className="px-3"
                bordered
                striped
                hover
              />
            )}

          </Fragment>
        </div>
      </div>

    </Fragment>

  )
}

export default ProductList