import { Link } from "react-router-dom"
const VentasTable = () => {
  return (
    // <div className="py-5">
        <div className="container py-5">
            <div className="row">
                <div className="card py-2">
                    <div className="card-header">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-12 mb-3">
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
                                <th scope="col" className="text-center">Fecha</th>
                                <th scope="col" className="text-center">Producto</th>
                                <th scope="col" className="text-center">Valor</th>
                                <th scope="col" className="text-center">Detalle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12-06-2022</td>
                                    <td>Teclado</td>
                                    <td>$ 250.00</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/detail" className="btn btn-info btn-sm ms-2">ver</Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>12-06-2022</td>
                                    <td>Mouse Action Performance</td>
                                    <td>$ 450.00</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/detail" className="btn btn-info btn-sm ms-2">ver</Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>12-07-2022</td>
                                    <td>Pc Hp All In One</td>
                                    <td>$ 1.250.00</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/detail" className="btn btn-info btn-sm ms-2">ver</Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>18-07-2022</td>
                                    <td>Licencia Office 365 Personal</td>
                                    <td>$ 250.00</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/detail" className="btn btn-info btn-sm ms-2">ver</Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>22-08-2022</td>
                                    <td>Ipad Mac</td>
                                    <td>$ 3.250.00</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/detail" className="btn btn-info btn-sm ms-2">ver</Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
        </div>
        
    // </div>
  )
}

export default VentasTable