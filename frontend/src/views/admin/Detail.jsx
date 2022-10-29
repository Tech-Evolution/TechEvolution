import { useContext } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ProductContext } from "../../context/ProductProvider" 
import NavbarAdmin from "./components/NavbarAdmin"

const Detail = () => {
    const data = useContext(ProductContext)

    const { id } = useParams();
    const navigate = useNavigate();
    const product = data.find((e) => e.id === Number(id));
    return (
        <>
            <NavbarAdmin />
            <div className="container py-5">
            <div className="row py-5">
                <Link onClick={() => navigate(-1)}>
                    <i class="fa fa-duotone fa-arrow-left" title="Ir Atrás"></i>
                </Link>
                <div className="col-12 col-md-12 col-lg-6">
                    <img src={product.image} alt={product.name}className="img-fluid h-100 w-100"/>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <h1 className="display-5">{product.name}</h1>
                    <h3 className="display-6 fw-bold my-4">
                        <span>$</span> {Intl.NumberFormat('de-DE').format(product.price)}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <Link to="/cart" className="btn btn-dark ms-2 px-3">Editar</Link>
                </div>
            </div>
        </div>
        </>
  )
}

export default Detail