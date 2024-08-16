import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',  // Ajusta esto a la URL de tu backend
});

export const getRestaurants = () => api.get('/restaurants');
export const getRestaurant = (id) => api.get(`/restaurants/${id}`);
export const createReservation = (data) => api.post('/reservations', data);
// Añade más funciones según sea necesario