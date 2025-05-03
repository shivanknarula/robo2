import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import RoboticOfferings from '../components/RoboticOfferings';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden hero-section">
        <ReactPlayer
          url="/bckvid.webm" // Ensure this file exists in the root directory
          playing
          loop
          muted
          playsinline
          width="100%"
          height="67%"
          className="absolute top-0 left-0 z-0 react-player-bg"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Robros-Next: Precision Automation</h1>
          <p className="mt-4 max-w-xl text-lg">High-speed, precise collaborative robots for modern manufacturing across industries.</p>
          <button className="cta-button mt-6" aria-label="Get a Quote">Get a Quote</button>
        </div>
      </section>

      {/* Robotic Offerings Section */}
      <RoboticOfferings />

      {/* Products Section */}
      <section className="products-section">
        <h2>Our Robotic Offerings</h2>
        <div className="products-grid">
          <div className="product-card">
            <h3>Collaborative Robots</h3>
            <p>Engineered for efficiency and precision in small to medium-sized operations.</p>
          </div>
          <div className="product-card">
            <h3>Mobile Vision Robots</h3>
            <p>Intelligent welding and cutting robots with advanced vision systems.</p>
          </div>
          <div className="product-card">
            <h3>SCARA & Delta Robots</h3>
            <p>High-speed robots for sorting, assembly, and specialized applications.</p>
          </div>
          <div className="product-card">
            <h3>Industrial Automation</h3>
            <p>Comprehensive solutions for welding, palletizing, and handling tasks.</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <h2>Applications</h2>
        <p>Dobot's robots are capable of performing a wide range of tasks more efficiently.</p>
        <div className="showcase-grid">
          <div className="showcase-item">
            <img src="/icons/welding.svg" alt="Welding Icon" /> {/* Ensure this file exists */}
            <h3>Welding</h3>
            <p>Precision welding solutions for automotive, aerospace, and more.</p>
            <Link to="/products" className="showcase-link">Learn More</Link>
          </div>
          <div className="showcase-item">
            <img src="/icons/palletizing.svg" alt="Palletizing Icon" /> {/* Ensure this file exists */}
            <h3>Palletizing</h3>
            <p>Automate stacking and packing for efficient logistics.</p>
            <Link to="/products" className="showcase-link">Learn More</Link>
          </div>
          <div className="showcase-item">
            <img src="/icons/assembly.svg" alt="Assembly Icon" /> {/* Ensure this file exists */}
            <h3>Assembly</h3>
            <p>Streamline production with high-speed assembly robots.</p>
            <Link to="/products" className="showcase-link">Learn More</Link>
          </div>
          <div className="showcase-item">
            <img src="/icons/bin-picking.svg" alt="Bin Picking Icon" /> {/* Ensure this file exists */}
            <h3>Bin Picking</h3>
            <p>Advanced vision systems for automated bin picking tasks.</p>
            <Link to="/products" className="showcase-link">Learn More</Link>
          </div>
        </div>
        <Link to="/products" className="learn-more-link">Learn More &gt;</Link>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>High Payload Capacity</h3>
            <p>Handle up to 800 kg with stability at high speeds.</p>
          </div>
          <div className="feature-item">
            <h3>Explosion-Proof Design</h3>
            <p>Engineered for safety with explosion-proof design.</p>
          </div>
          <div className="feature-item">
            <h3>Customizable Solutions</h3>
            <p>Tailored robots to meet your specific manufacturing needs.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Transform Your Manufacturing Today</h2>
        <p>Contact us to explore our innovative robotic solutions and boost productivity.</p>
        <button className="cta-button" aria-label="Contact Us">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
