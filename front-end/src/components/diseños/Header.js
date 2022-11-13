import React, { Fragment } from 'react'
import "../../App.css"
import { Link, NavLink } from "react-router-dom"


const Header = () => {
    return (
        <Fragment>

            <div>
                <header class="sticky-header__header">

                    <nav className="navbar navbar-expand-lg bg-light fixed-top  navbar-white py-3 shadow-sm mb-5">
                        <div className="container">
                            <Link className="navbar-brand fw-bold fs-4" to="/">TechEvolution</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/" end>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/products">Productos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contacto</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/Sidebar">Admin</NavLink>

                                    </li>
                                </ul>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <div className="buttons">
                                    <Link to="login" className="btn btn-outline-dark">
                                        <i className="fa fa-sign-in me-1"></i>
                                        Login
                                    </Link>
                                    <Link to="/register" className="btn btn-outline-dark ms-2">
                                        <i className="fa fa-user-plus me-1"></i>
                                        Registro
                                    </Link>

                                    <Link to="/carrito" className="btn btn-outline-dark ms-2">
                                        <i className="fa fa-shopping-cart me-1"></i>
                                        Car (0)
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </nav>
                </header>

            </div>


        </Fragment>
    )
}

export default Header
