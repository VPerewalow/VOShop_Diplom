import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import ProductStore from './components/ProductStore/ProductStore';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Header from './components/Header/Header';
import ShopCart from './components/ShopCart/ShopCart';
import Footer from './components/Footer/Footer';

function App() {
  const [search, setSearch] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Router future={{ v7_startTransition: true }}>
          <Header setSearch={setSearch} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Routes>
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/products' element={<ProductStore search={search} />} />
            <Route path='/cart' element={<ShopCart />} />
            <Route path='/*' element={<Navigate to='/products' />} />
          </Routes>
          <Footer />
        </Router>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;