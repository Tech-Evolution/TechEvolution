import { Link } from "react-router-dom"

const Footer = () => {
  return (
    // <div className="container">
        // <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        //     <div className="col-md-4 d-flex align-items-center">
        //         <Link to="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
        //             TechEvolution
        //         </Link>
        //         <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
        //     </div>

        //     <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        //         <li className="">
        //             <Link to="" className="text-muted">
        //                 <i className="fa fa-brands fa-facebook"></i>
        //             </Link>
        //         </li>
        //         <li className="ms-3">
        //             <Link to="/">
        //                 <i className="fa fa-brands fa-instagram"></i>
        //             </Link>
        //         </li>
        //         <li className="ms-3">
        //             <Link to="">
        //                 <i className="fa fa-brands fa-whatsapp"></i>
        //             </Link>
        //         </li>
        //     </ul>
        // </footer>
    // </div>
    <div className="bottom-0">
        <footer className="text-center text-white bottom-0">
            <div className="continer pt-4">
                <section className="mb-4">
                    <Link className='text-primary m-1'>
                        <i className="fa fa-brands fa-facebook"></i>
                    </Link>
                    <Link className='text-danger m-3'>
                        <i className="fa fa-brands fa-instagram"></i>
                    </Link>
                    <Link className='text-success m-3'>
                        <i className="fa fa-brands fa-whatsapp"></i>
                    </Link>
                </section>
            </div>
            <div className='p-3 bg-secondary'>
                <h5 className='text-white m-0'>
                     © {new Date().getFullYear()} Copyright: TechEvolution
                </h5>
            </div>
        </footer>
    </div>
  )
}

export default Footer