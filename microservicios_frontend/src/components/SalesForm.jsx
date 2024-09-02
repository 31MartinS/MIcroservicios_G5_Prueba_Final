import React, { useState, useEffect } from 'react';
import { fetchClientes, fetchProductos, createSale } from '../services/api';

function SalesForm({ onAddProduct, onCompleteSale }) {
  const [clientId, setClientId] = useState('');
  const [clientes, setClientes] = useState([]);
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadClientes = async () => {
      try {
        const clientesData = await fetchClientes();
        console.log('Clientes cargados:', clientesData); // Debug: Verifica los datos recibidos
        setClientes(clientesData);
      } catch (error) {
        console.error('Error al cargar clientes:', error.message);
        alert(`Error al cargar clientes: ${error.message}`); // Muestra el error en la interfaz
      }
    };

    const loadProductos = async () => {
      try {
        const productosData = await fetchProductos();
        console.log('Productos cargados:', productosData); // Debug: Verifica los datos recibidos
        setProducts(productosData);
      } catch (error) {
        console.error('Error al cargar productos:', error.message);
        alert(`Error al cargar productos: ${error.message}`); // Muestra el error en la interfaz
      }
    };

    loadClientes();
    loadProductos();
  }, []);

  const handleAddProduct = () => {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
      if (product.cantidadEnStock < quantity) {
        alert(`No hay suficiente stock para el producto ${product.nombre}. Stock disponible: ${product.cantidadEnStock}`);
        return;
      }
      onAddProduct({ ...product, quantity: parseInt(quantity) });
    }
  };

  const handleSaleComplete = async () => {
    if (!clientId) {
      alert('Por favor, selecciona un cliente.');
      return;
    }
    if (onCompleteSale().length === 0) {
      alert('Por favor, agrega al menos un producto a la venta.');
      return;
    }

    const sale = {
      clienteId,
      productos: onCompleteSale()
    };

    try {
      await createSale(sale);
      alert('Venta registrada exitosamente.');
    } catch (error) {
      alert(`Error al registrar la venta: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Registrar Venta</h2>
      <div>
        <label>Cliente:</label>
        <select value={clientId} onChange={e => setClientId(e.target.value)}>
          <option value="">Seleccione un cliente</option>
          {clientes.map(cliente => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nombre} - {cliente.email}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Producto:</label>
        <select value={productId} onChange={e => setProductId(e.target.value)}>
          <option value="">Seleccione un producto</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>
              {product.nombre} - Stock: {product.cantidadEnStock}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <button onClick={handleAddProduct}>Agregar Producto</button>
      <button onClick={handleSaleComplete}>Completar Venta</button>
    </div>
  );
}

export default SalesForm;
