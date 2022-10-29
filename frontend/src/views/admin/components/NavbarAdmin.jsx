import { NavLink, Link } from "react-router-dom"

const NavbarAdmin = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top navbar-white py-3 shadow-sm mb-5">
        <div className="container">
            <Link className="navbar-brand fw-bold fs-4" to="/">TechEvolution</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/dashboard" end>Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard/products">Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">Ventas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">Ordenes</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default NavbarAdmin