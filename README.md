# MIcroservicios_G5_Prueba_Final

Este proyecto consiste en un sistema de ventas compuesto por un frontend desarrollado con React y Vite, y un backend dividido en tres microservicios (Clientes, Inventario, y Ventas) desarrollados con Node.js y Express.

## Contenido

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Endpoints del Backend](#endpoints-del-backend)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Requisitos

- Node.js (v14 o superior)
- npm o Yarn
- Docker (opcional, para bases de datos y otros servicios)

## Instalación

### Frontend

1. Clona el repositorio del frontend:

    ```bash
    git clone https://github.com/tuusuario/sistema-ventas-frontend.git
    cd sistema-ventas-frontend
    ```

2. Instala las dependencias del frontend:

    ```bash
    npm install
    # o
    yarn install
    ```

### Backend

1. Clona el repositorio del backend:

    ```bash
    git clone https://github.com/tuusuario/sistema-ventas-backend.git
    cd sistema-ventas-backend
    ```

2. Instala las dependencias para cada microservicio:

    ```bash
    cd servicios/clientes
    npm install
    # o
    yarn install
    cd ../inventario
    npm install
    # o
    yarn install
    cd ../ventas
    npm install
    # o
    yarn install
    ```

## Configuración

### Frontend

1. Crea un archivo `.env` en la raíz del frontend y agrega las siguientes variables de entorno:

    ```env
    VITE_API_CLIENTES_URL=http://localhost:3002/api/clientes
    VITE_API_INVENTARIO_URL=http://localhost:3003/api/inventario
    VITE_API_VENTAS_URL=http://localhost:3001/api/ventas
    ```

### Backend

1. Crea un archivo `.env` en la raíz de cada microservicio y agrega las variables de entorno necesarias:

    ```env
    # Para clientes
    PUERTO_SERVICIO=3002
    NOMBRE_SERVICIO=clientes
    DATABASE_URL=postgres://usuario:password@localhost:5432/clientes

    # Para inventario
    PUERTO_SERVICIO=3003
    NOMBRE_SERVICIO=inventario
    DATABASE_URL=postgres://usuario:password@localhost:5432/inventario

    # Para ventas
    PUERTO_SERVICIO=3001
    NOMBRE_SERVICIO=ventas
    DATABASE_URL=postgres://usuario:password@localhost:5432/ventas
    ```

2. Asegúrate de que las bases de datos estén configuradas y en ejecución. Puedes usar Docker para ejecutar instancias de PostgreSQL:

    ```bash
    docker run --name postgres-clientes -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
    docker run --name postgres-inventario -e POSTGRES_PASSWORD=password -p 5433:5432 -d postgres
    docker run --name postgres-ventas -e POSTGRES_PASSWORD=password -p 5434:5432 -d postgres
    ```

## Ejecución

### Frontend

Para iniciar el frontend en modo de desarrollo:

```bash
cd sistema-ventas-frontend
npm run dev
# o
yarn dev
