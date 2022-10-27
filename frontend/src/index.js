import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'

// Vistas
import Home from './views/Home';
import Products from './views/Products';
import Dashboard from './views/admin/Dashboard';
import ProductDetail from './views/ProductDetail';
import ProductProvider from './context/ProductProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <ProductProvider>
      <Routes>
        <Route path="/" element= {<App />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='detail' element={<ProductDetail />} />
        </Route>
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </ProductProvider>
  </BrowserRouter> 
);

