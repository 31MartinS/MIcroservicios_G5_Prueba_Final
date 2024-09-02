import axios from 'axios';

// URLs base de los microservicios
const CLIENTES_API_URL = 'http://localhost:3002/api/clientes';
const INVENTARIO_API_URL = 'http://localhost:3003/api/inventario';
const VENTAS_API_URL = 'http://localhost:3001/api/ventas';

// Configuración de instancias de Axios para cada microservicio
const clientesAPI = axios.create({ baseURL: CLIENTES_API_URL });


const inventarioAPI = axios.create({
  baseURL: INVENTARIO_API_URL,
});

const ventasAPI = axios.create({
  baseURL: VENTAS_API_URL,
});

// **Funciones para el Microservicio de Clientes**
export const fetchClientes = async () => {
    try {
      const response = await clientesAPI.get('/');
      return response.data;
    } catch (error) {
      console.error('Error en fetchClientes:', error); // Añade detalles del error
      throw new Error(`Error al obtener clientes: ${error.message}`);
    }
  };

export const crearCliente = async (cliente) => {
  try {
    const response = await clientesAPI.post('/', cliente);
    return response.data;
  } catch (error) {
    throw new Error(`Error al crear cliente: ${error.message}`);
  }
};

// **Funciones para el Microservicio de Inventario**
export const fetchProductos = async () => {
  try {
    const response = await inventarioAPI.get('/');
    return response.data;
  } catch (error) {
    throw new Error(`Error al obtener productos: ${error.message}`);
  }
};

export const crearProducto = async (producto) => {
  try {
    const response = await inventarioAPI.post('/', producto);
    return response.data;
  } catch (error) {
    throw new Error(`Error al crear producto: ${error.message}`);
  }
};

export const fetchSales = async () => {
    try {
      const response = await ventasAPI.get('/');
      return response.data;
    } catch (error) {
      throw new Error(`Error al crear la venta productos: ${error.message}`);
    }
  };
  
// **Funciones para el Microservicio de Ventas**
export const createSale = async (sale) => {
  try {
    const response = await ventasAPI.post('/', sale);
    return response.data;
  } catch (error) {
    throw new Error(`Error al registrar la venta: ${error.message}`);
  }
};

