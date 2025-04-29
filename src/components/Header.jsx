import React from 'react';

function Header({ productName }) {
  return (
    <header style={{ backgroundColor: 'white', color: 'yellow', padding: '1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', margin: 0 }}>{productName || 'Product Line'}</h1>
    </header>
  );
}

export default Header;