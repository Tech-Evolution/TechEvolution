import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductContext } from "../../../context/ProductProvider"

const Table = () => {

    const data = useContext(ProductContext)
    console.log(data)

  return (
    <div className="py-5">
        <div className="container py-5">

            <div className="row">
                <div className="card py-2">
                    <div className="card-header">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-12 col-md-4 col-lg3 mb-3">
                                <Link to="/products/create" className="btn btn-outline-dark py-2">Agregar Producto</Link>
                            </div>
                            <div className="col-12 col-md-4 col-lg-5 mb-3">
                                <input 
                                    className="py-2 form-control" 
                                    placeholder="Buscar..."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive card-body">
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                <th scope="col" className="text-center">Producto</th>
                                <th scope="col" className="text-center">Categoría</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col" className="text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <Link 
                                                        key={item.id} to={`/products/detail/${item.id}`}
                                                        className="btn btn-info btn-sm ms-2">ver
                                                    </Link>
                                                    <Link to="/detail" className="btn btn-danger btn-sm ms-2">Eliminar</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
        </div>
        
    </div>
  )
}

export default Table