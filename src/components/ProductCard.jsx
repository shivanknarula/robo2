import React from 'react';

function ProductCard({ product, onClick }) {
  return (
    <div
      className="card"
      onClick={() => onClick(product)}
      style={{
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      <img
        src={product.image}
        alt={product.name || 'Product Image'}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1rem' }}>
        <h3
          style={{
            fontSize: '1.5rem', // Slightly larger for prominence
            margin: '0 0 0.5rem',
            fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', // From index.css
            color: 'rgba(14, 13, 13, 0.87)', // Match index.css dark mode
            fontWeight: 500, // Match index.css link weight
          }}
        >
          {product.name || 'Unnamed Product'}
        </h3>
        <p
          style={{
            color: '#888',
            fontSize: '0.9rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;