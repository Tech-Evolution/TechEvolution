import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center">
        <div className="row justify-content-center align-items-center">
            <section className="py-5 text-center">
                <div className="py-5">
                    <h2 className="headline text-warning"> 404</h2>
                    <div className="error-content">
                        <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Página no encontrada.</h3>
                        <p>
                            Puedes volver al inicio dando click aquí <Link className="text-decoration-none" to="/">Volver al Inicio</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default NotFound