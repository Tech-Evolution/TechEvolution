import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'

// Vistas
import Home from './views/Home';
import Products from './views/Products';
import Dashboard from './views/admin/Dashboard';
import ProductDetail from './views/ProductDetail';
import ProductProvider from './context/ProductProvider';
import ProductsAdmin from './views/admin/ProductsAdmin';
import CreateProduct from './views/admin/CreateProduct';
import Cart from './views/Cart';
import NotFound from './components/NotFound';
import Detail from './views/admin/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <ProductProvider>
      <Routes>
        <Route path="/" element= {<App />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          **<Route path='detail/:id' element={<ProductDetail />} />**
          <Route path='cart' element={<Cart />} />
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard/products' element={<ProductsAdmin />} />
        <Route path='products/create' element={<CreateProduct/>} />
        <Route path='products/detail/:id' element={<Detail/>} />
      </Routes>
    </ProductProvider>
  </BrowserRouter> 
);

