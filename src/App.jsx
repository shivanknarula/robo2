import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Products from './pages/ProductPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Videos from './components/Videos';

import './styles/index.css';
import './styles/home.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/contact-us.css';
import './styles/products.css';
import './styles/videos.css';


const App = () => {
  return (
    <HashRouter >
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/who-we-are" element={<AboutUs />} />
            <Route path="/product-videos" element={<Videos />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;