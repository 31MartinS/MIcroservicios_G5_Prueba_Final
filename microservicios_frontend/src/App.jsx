import React, { useState } from 'react';
import SalesForm from './components/SalesForm';
import ProductList from './components/ProductList';
import SalesSummary from './components/SalesSummary';
import ClientesList from './components/ClientesList';

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddProduct = (product) => {
    const existingProduct = selectedProducts.find(p => p.id === product.id);
    if (existingProduct) {
      const newQuantity = existingProduct.quantity + product.quantity;
      if (newQuantity > product.cantidadEnStock) {
        alert(`No hay suficiente stock disponible para ${product.nombre}.`);
        return;
      }
      setSelectedProducts(
        selectedProducts.map(p =>
          p.id === product.id ? { ...p, quantity: newQuantity } : p
        )
      );
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };
  
  const handleCompleteSale = () => {
    const saleProducts = selectedProducts.map(({ id, quantity, precioUnitario }) => ({
      productoId: id,
      cantidad: quantity,
      precioUnitario
    }));
    setSelectedProducts([]);
    return saleProducts;
  };
  

  return (
    <div>
      <h1>Sistema de Ventas</h1>
      <SalesForm onAddProduct={handleAddProduct} onCompleteSale={handleCompleteSale} />
      <ProductList products={selectedProducts} />
      <SalesSummary products={selectedProducts} />
      <ClientesList />
    </div>
  );
}

export default App;
