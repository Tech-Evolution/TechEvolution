import { useContext } from "react"
import CardProduct from "../components/CardProduct"
import { ProductContext } from "../context/ProductProvider"



const Products = () => {
  
  const products = useContext(ProductContext)
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="card-body mb-4 mt-5">
            <div className="input-group mb-3 mt5">
              <span className="input-group-text side-label">
                <i className="fa fa-shopping-cart me-1"></i>
              </span>
              <input 
                type="text" 
                name="filter" 
                placeholder="Buscar productos..." 
                className="form-control" 
              />
            </div>
          </div>
        </div>
        <div className="row mb-5">
          {
            products.map(item => (
              <CardProduct key={item.id} product={item} />
            ))
          } 
        </div>
      </div>
      
    </>
  )
}

export default Products