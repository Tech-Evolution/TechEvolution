import React, { Fragment } from 'react'
import "../../App.css"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <Fragment>

            <div>
                <header class="sticky-header__header">

                    <nav className="navbar row">
                        <div className='col-12 col-md-3'>
                            <div className='navbar-brand'>
                                <img src="./images/logo.png" width="140" height="140" alt='Tech Evolution'></img>

                            </div>
                        </div>

                        <div className='col-12 col-md-6 mt-2 mt-md-0'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="search_field"
                                    class="form-control"
                                    placeholder='¿Que producto estas buscando?'></input>

                                <div class="input-group-append">
                                    <button id="search-btn" class="btn">
                                        <i class="fa fa-search text-white" aria-hidden="true">Buscar</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                            <div className="ml-4 dropdown d-inline">
                                <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>Panel de Control</span></Link><div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                    
                                    <Link className="dropdown-item" to="/">Login</Link>
                                    <Link className="dropdown-item" to="/">Iniciar sección</Link>
                                    <Link className="dropdown-item" to="/">Cerrar sección</Link>
                                    <Link className="dropdown-item" to="/">Adm. Productos</Link>
                                </div>
                            </div>
                            <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i><span className="ml-1" id="cart_count">2</span>
                        </div>

                    </nav>
                </header>

            </div>


        </Fragment>
    )
}

export default Header
