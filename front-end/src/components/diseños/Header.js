import React, { Fragment } from 'react'

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
                            <span><button> Iniciar seccion</button></span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>

                            <span className="ml-1" id="cart_count">2</span>
                        </div>

                    </nav>
                </header>

            </div>


        </Fragment>
    )
}

export default Header
