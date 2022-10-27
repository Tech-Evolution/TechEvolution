import { NavLink } from "react-router-dom"

const ProductDetail = () => {
  return (
    <div className="container py-5">
        <div className="row py-5">
            <div className="col-12 col-md-12 col-lg-6">
                <img src="/assets/apple.jpg" alt="Pc Mac All In One" height={400} width={400} />
            </div>
            <div className="col-12 col-lg-6">
                <h4 className="text-uppercase text-black-50">Hardware</h4>
                <h1 className="display-5">Pc Mac All In One</h1>
                <h3 className="display-6 fw-bold my-4">
                    <span>$</span> 3.000.000
                </h3>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet eius aliquid? Consequatur ipsam nemo ullam similique, vel illum reprehenderit voluptatum id inventore magni, deleniti ipsa animi architecto doloremque eos!
                </p>
                <button className="btn btn-outline-dark">Agregar al Carrito</button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3">Ir al Carrito</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail