import Cards from "./components/Cards"
import NavbarAdmin from "./components/NavbarAdmin"
import VentasTable from "./components/VentasTable"

const Dashboard = () => {
  return (
    <>
      <NavbarAdmin/>
      <div className="container py-5">
        <div className="py-5"></div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Cards />
        </div>
        <VentasTable />
      </div>
    </>
  )
}

export default Dashboard