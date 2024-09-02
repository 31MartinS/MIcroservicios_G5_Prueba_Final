import React from 'react';

function SalesSummary({ products }) {
  const total = products.reduce((acc, product) => acc + product.quantity * product.precioUnitario, 0);

  return (
    <div>
      <h2>Total de la Venta</h2>
      <p>${total.toFixed(2)}</p>
    </div>
  );
}

export default SalesSummary;
