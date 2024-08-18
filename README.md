# Sistema de Reservaciones de Restaurante

## Programacion Web Avanzada - 14567
## Grupo #2

- Javier Gonzaga
- Jhon Munarco
- Francisco Terán


## Prueba - Tercer Parcial

## Descripción del Proyecto

Este sistema permite gestionar las reservaciones de un restaurante de manera integral, desde la asignación de mesas hasta la confirmación de pedidos. Está diseñado como una plataforma monolítica que combina un backend desarrollado en Node.js con un frontend en Next.js.

## Arquitectura

- **Backend:** Desarrollado en Node.js utilizando Express para la gestión de rutas y peticiones HTTP. Se encarga de la lógica de negocio y la conexión a la base de datos.
- **Frontend:** Construido con Next.js, ofreciendo una interfaz dinámica y reactiva para la interacción con el sistema de reservas. Tailwind CSS se usa para el diseño y la estilización de la interfaz de usuario.

## Requisitos Previos

- Node.js v16.x o superior.
- NPM o Yarn para la gestión de dependencias.
- (Opcional) Docker para contenerizar la aplicación.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/proyecto-restaurante.git

2. Instala las dependencias en ambos directorios: 
    cd restaurant-reservation-frontend
    npm install
    cd ../restaurant-reservation-backend
    npm install

3. Configura la base de datos y las variables de entorno según sea necesario.

4. Ejecuta la aplicación:

### En el frontend:
    npm run dev


### En el backend:
    npm start



## Uso de la Aplicación

- Inicio de Sesión: Los usuarios pueden autenticarse y acceder a la plataforma.

- Gestión de Reservas: Los usuarios pueden crear, modificar y eliminar reservas desde la interfaz gráfica.

- Asignación de Mesas: El sistema asigna mesas disponibles automáticamente para las reservas.

- Confirmación de Pedidos: Se proporciona una confirmación final al usuario tras realizar la reserva.

## Tecnologías Utilizadas

- Backend: Node.js, Express.

- Frontend: Next.js, Tailwind CSS.

- Base de Datos: (Configuración requerida según el entorno).

## Licencia
Este proyecto está bajo la Licencia MIT.