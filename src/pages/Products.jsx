import React from 'react';
import '../styles/products.css';

const products = [
  {
    name: 'Robotic Arm',
    image: '/pics/Painting.jpg',
    description: 'Versatile robotic arms for various industrial applications.',
    link: 'https://www.evsrobot.com/robotic-arm_c1',
  },
  {
    name: 'Robotic Welding',
    image: '/pics/welding 3.jpg',
    description: 'High-precision welding robots for automotive and manufacturing.',
    link: 'https://www.evsrobot.com/robotic-welding_c2',
  },
  {
    name: 'Pick and Place Robot',
    image: '/pics/pick and place.jpg',
    description: 'Efficient robots for sorting and placing tasks.',
    link: 'https://www.evsrobot.com/pick-and-place-robot_c3',
  },
  {
    name: 'Palletizing Robot',
    image: '/pics/palletizing.jpg',
    description: 'Automate palletizing for logistics and warehousing.',
    link: 'https://www.evsrobot.com/palletizing-robot_c4/',
  },
  {
    name: 'Painting Robot',
    image: '/pics/Painting.jpg',
    description: 'Robots designed for precise painting applications.',
    link: 'https://www.evsrobot.com/painting-robot_c5',
  },
  {
    name: '6 Axis Robot',
    image: '/assets/6-axis-robot.jpg',
    description: 'Flexible 6-axis robots for complex tasks.',
    link: 'https://www.evsrobot.com/6-axis-robot_c6',
  },
  {
    name: 'SCARA Robot',
    image: '/assets/scara-robot.jpg',
    description: 'High-speed SCARA robots for assembly and sorting.',
    link: 'https://www.evsrobot.com/scara-robot_c7',
  },
  {
    name: 'Welding Positioner',
    image: '/pics/welding 1.jpg',
    description: 'Enhance welding efficiency with precise positioning.',
    link: 'https://www.evsrobot.com/welding-positioner_c8',
  },
  {
    name: 'Robot Walking Rail',
    image: '/assets/robot-walking-rail.jpg',
    description: 'Extend robot reach with walking rail systems.',
    link: 'https://www.evsrobot.com/product-category/robot-track',
  },
];

const Products = () => {
  return (
    <div className="products-page-container">
      <section className="products-hero">
        <h1>Our Products</h1>
        <p>Explore our range of robotic solutions for industrial automation.</p>
      </section>

      <section className="products-list">
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a href={product.link} className="product-link" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;