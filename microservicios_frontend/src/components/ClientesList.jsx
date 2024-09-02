import React, { useState, useEffect } from 'react';
import { fetchClientes, crearCliente } from '../services/api';

function ClientesList() {
  const [clientes, setClientes] = useState([]);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  useEffect(() => {
    const loadClientes = async () => {
      try {
        const clientesData = await fetchClientes();
        setClientes(clientesData);
      } catch (error) {
        console.error(error.message);
      }
    };

    loadClientes();
  }, []);

  const handleCrearCliente = async () => {
    if (!nombre || !email) {
      alert('Nombre y Email son obligatorios.');
      return;
    }

    const nuevoCliente = { nombre, email, telefono };

    try {
      const clienteCreado = await crearCliente(nuevoCliente);
      setClientes([...clientes, clienteCreado]);
      setNombre('');
      setEmail('');
      setTelefono('');
      alert('Cliente creado exitosamente.');
    } catch (error) {
      alert(`Error al crear cliente: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Gestión de Clientes</h2>
      <div>
        <h3>Agregar Nuevo Cliente</h3>
        <div>
          <label>Nombre:</label>
          <input value={nombre} onChange={e => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Teléfono:</label>
          <input value={telefono} onChange={e => setTelefono(e.target.value)} />
        </div>
        <button onClick={handleCrearCliente}>Crear Cliente</button>
      </div>
      <div>
        <h3>Lista de Clientes</h3>
        <ul>
          {clientes.map(cliente => (
            <li key={cliente.id}>
              {cliente.nombre} - {cliente.email} - {cliente.telefono}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClientesList;
