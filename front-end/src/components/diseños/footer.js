import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <Fragment>
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            <Link to="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                TechEvolution
            </Link>
            <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
            </div>
            

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <Link to="" className="text-muted">
                        <i className="fa fa-brands fa-facebook"></i>
                    </Link>
                </li>
                <li className="ms-3">
                    <Link to="/">
                        <i className="fa fa-brands fa-instagram"></i>
                    </Link>
                </li>
                <li className="ms-3">
                    <Link to="">
                        <i className="fa fa-brands fa-whatsapp"></i>
                    </Link>
                </li>
            </ul>
        </footer>
    </div>

    </Fragment>
  )
}
