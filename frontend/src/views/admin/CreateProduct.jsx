import NavbarAdmin from "./components/NavbarAdmin"

const CreateProduct = () => {
  return (
    <>
    <NavbarAdmin />
    <div className="py-5 container">
        <div className="row py-5">
            <div className="card py-5 col-12 col-lg-10 m-auto">
                <h1 className="text-center m-0">Nuevo Producto</h1>
                <div className="card-body">
                    <div className="card">
                        <form className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input type="text" className="form-control" placeholder="Producto" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <textarea type="text" className="form-control" placeholder="Desscripción" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input type="text" className="form-control" placeholder="categoría" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input type="number" className="form-control" placeholder="Precio" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input type="file" className="form-control" placeholder="Imagen" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateProduct