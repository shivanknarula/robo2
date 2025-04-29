import React from 'react';
import ProductCard from './ProductCard.jsx';

function ProductList({ products, onSelectProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={onSelectProduct} />
      ))}
    </div>
  );
}

export default ProductList;