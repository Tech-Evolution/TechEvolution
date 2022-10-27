import { Link } from "react-router-dom"


const CardProduct = ({product}) => {


  return (
    <div className="col-md-6 col-lg-4 mb-3">
        <div className="card h-100 text-center p-4">
            <img src={product.image} alt={product.image} height='220px'/>
            <div className="card-body">
                <h5 className="mb-0" >{product.name}</h5>
                <p className="card-text lead text-success">
                    <span className="lead fw-bold">$</span> {product.price}
                </p>
            </div>
            <Link to="/detail" className="btn btn-outline-dark">Ver Más...</Link>
        </div>
    </div>
  )
}

export default CardProduct