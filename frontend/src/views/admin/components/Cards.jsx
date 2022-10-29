import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <>
        <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
                <div className="card-body lead">Productos <span>150</span></div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <Link className="small text-white stretched-link text-decoration-none" >Ver Detalles</Link>
                    <div className="small text-white"><i className="fa fa-duotone fa-arrow-rigth"></i></div>
                </div>
            </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-warning text-white mb-4">
                            <div className="card-body lead">Ventas <span>$10.450.000</span></div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link text-decoration-none" >Ver Detalles</Link>
                                <div className="small text-white"><i className="fa fa-duotone fa-arrow-rigth"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-success text-white mb-4">
                            <div className="card-body lead">Entregas <span>100</span></div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link text-decoration-none" >Ver Detalles</Link>
                                <div className="small text-white"><i className="fa fa-duotone fa-arrow-rigth"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-danger text-white mb-4">
                            <div className="card-body lead">Despachos <span>10</span></div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link text-decoration-none">Ver Detalles</Link>
                                <div className="small text-white"><i className="fa fa-duotone fa-arrow-rigth"></i></div>
                            </div>
                        </div>
                    </div>
                </>
  )
}

export default Cards