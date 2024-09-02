import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h2>Productos Seleccionados</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.nombre} - Cantidad: {product.quantity} - Precio Unitario: ${product.precioUnitario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
