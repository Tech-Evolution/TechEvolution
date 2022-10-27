import { useContext } from "react"
import CardProduct from "../components/CardProduct"
import TitlesHome from "../components/TitlesHome"
import { ProductContext } from "../context/ProductProvider"

const Home = () => {

  const data = useContext(ProductContext)

  const products = data.slice(0,3)
  const hardware = data.filter((item) => item.category === "hardware").slice(0,3);
  const software = data.filter((item) => item.category === "software").slice(0,3);

  return (
  <>
    <div className="card text-bg-dark border-0 mt-1">
        <img src="/assets/bg.jpg" className="card-img" alt="background" height="550px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">Lo último en tecnología al alcance de tus sueños.</h5>
                <p className="card-text lead fs-2 mt-3">EXPLORA LAS NUEVAS TENDENCIAS
                </p>
            </div>       
        </div>
    </div>

    <div className="container my-5 py-5">

      <div className="row mb-5">
        {
          products.map(item => (
            <CardProduct key={item.id} product={item} />
          ))
        }
      </div>

      <TitlesHome title="Hardware"/>
      <div className="row mb-5">
        {
          hardware.map(item => (
            <CardProduct key={item.id} product={item} />
          ))
        }  
      </div>

      <TitlesHome title="Software"/>
      <div className="row mb-5">
        {
          software.map(item => (
            <CardProduct key={item.id} product={item} />
          ))
        }
      </div>

    </div>
  </>
  )
}

export default Home