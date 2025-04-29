import React from 'react';

function ProductDetail({ product, onBack }) {
  return (
    <div style={{ padding: '2rem' }}>
      <button 
        onClick={onBack}
        style={{ marginBottom: '1rem' }}
      >
        Back to Products
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '8px' }}
        />
        <div style={{ textAlign: 'left', width: '100%', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{product.name}</h2>
          <p style={{ color: '#888', marginBottom: '1rem' }}>{product.description}</p>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Specifications</h3>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            {product.specs.map((spec, index) => (
              <li key={index} style={{ color: '#888' }}>{spec}</li>
            ))}
          </ul>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Features</h3>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
            {product.features.map((feature, index) => (
              <li key={index} style={{ color: '#888' }}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;