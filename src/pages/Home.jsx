import React from 'react';
import { Link } from 'react-router-dom';
import RoboticOfferings from '../components/RoboticOfferings';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop className="hero-video">
          <source src="/bckvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Robros-Next: Precision Automation</h1>
          <p>High-speed, precise collaborative robots for modern manufacturing across industries.</p>
          <button className="cta-button" aria-label="Get a Quote">
            Get a Quote
          </button>
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
        
        
        {/* Showcase Blocks */}
        <div className="showcase-grid">
          <div className="showcase-item">
            <img src="/icons/welding.svg" alt="Welding" />
            <h3>Welding</h3>
            <p>Precision welding solutions for automotive, aerospace, and more.</p>
            <Link to="/products" className="showcase-link">Learn More</Link>
          </div>
          <div className="showcase-item">
            <img src="/icons/palletizing.svg" alt="Palletizing" />
            <h3>Palletizing</h3>
            <p>Automate stacking and packing for efficient logistics.</p>
            <Link to="/products" className="showcase-link">Learn More</Link>
          </div>
          <div className="showcase-item">
            <img src="/icons/assembly.svg" alt="Assembly" />
            <h3>Assembly</h3>
            <p>Streamline production with high-speed assembly robots.</p>
            <Link to="/products" className="showcase-link">Learn More</Link>
          </div>
          <div className="showcase-item">
            <img src="/icons/bin-picking.svg" alt="Bin Picking" />
            <h3>Bin Picking</h3>
            <p>Advanced vision systems for automated bin picking tasks.</p>
            <Link to="/products" className="showcase-link">Learn More</Link>
          </div>
        </div>
        <Link to="/products" className="learn-more-link">Learn More &gt;</Link>

      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2>Why Choose EVS Robotics?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>High Payload Capacity</h3>
            <p>Handle up to 800 kg with stability at high speeds.</p>
          </div>
          <div className="feature-item">
            <h3>Explosion-Proof Design</h3>
            <p>First in China with certified explosion-proof robots.</p>
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