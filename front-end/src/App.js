import './App.css';
import { loadUser } from './action/userActions';
import React, { useEffect } from 'react';
import Header from './components/diseños/Header';
import { Footer } from './components/diseños/footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DetalleProducts } from './components/products/DetalleProducts';
import { Dashboard } from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import Sidebar from './components/admin/Sidebar';
//import { ProductList } from './components/admin/ProductList';
//Router traido desde react-router-dom (no confundir con el de express)
import Cart from './components/cart/Cart';
import ProtectedRoute from './routes/ProtectedRoute';
import tienda from "./tienda"
import { Products } from './components/Products'
import NewProduct from './components/admin/NewProduct';
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';
import { Profile } from './components/user/Profile';
import { UpdateProfile } from "./components/user/UpdateProfile"
import { UpdatePassword } from './components/user/UpdatePassword';
import { ForgotPassword } from "./components/user/ForgotPassword"
import { NewPassword } from './components/user/NewPassword';


function App() {
  useEffect(() => {
    tienda.dispatch(loadUser())
  }, [])



  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/producto/:id" element={<DetalleProducts />} />
            <Route path='/listProduct' element={<ProductList />} />
            <Route path='/Sidebar' element={<Sidebar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<Register />} />
            <Route path="/nuevoProducto" element={<NewProduct />} />
            <Route path="/yo" element={<Profile />} />
            <Route path="/yo/update" element={<UpdateProfile />} />
            <Route path="/password/update" element={<UpdatePassword />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/resetPassword/:token" element={<NewPassword />} />

            {/*Ruta protegida*/}
            <Route path="/dashboard"
              element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
