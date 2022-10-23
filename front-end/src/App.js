import './App.css';
import React from 'react';
import Header from './components/diseños/Header';
import { Footer } from './components/diseños/footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DetalleProducts } from './components/products/DetalleProducts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path='/producto/:id' element={<DetalleProducts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
