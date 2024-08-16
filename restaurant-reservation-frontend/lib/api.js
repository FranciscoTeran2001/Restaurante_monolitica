// lib/api.js
import axios from 'axios';
import { getCookie } from './cookies';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

// Añade el token a todas las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = getCookie('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Restaurantes
export const getRestaurants = () => api.get('/restaurants');
export const getRestaurant = (id) => api.get(`/restaurants/${id}`);
export const createRestaurant = (data) => api.post('/restaurants', data);
export const updateRestaurant = (id, data) => api.put(`/restaurants/${id}`, data);
export const deleteRestaurant = (id) => api.delete(`/restaurants/${id}`);

// Reservaciones
export const getReservations = () => api.get('/reservations');
export const getReservation = (id) => api.get(`/reservations/${id}`);
export const createReservation = (data) => api.post('/reservations', data);
export const updateReservation = (id, data) => api.put(`/reservations/${id}`, data);
export const deleteReservation = (id) => api.delete(`/reservations/${id}`);

// Usuarios
export const getUsers = () => api.get('/users');
export const getUser = (id) => api.get(`/users/${id}`);
export const createUser = (data) => api.post('/users', data);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/${id}`);

// Autenticación
export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const registerUser = (userData) => api.post('/auth/register', userData);
export const logoutUser = () => api.post('/auth/logout');
export const getCurrentUser = () => api.get('/auth/me');

// Búsqueda
export const searchRestaurants = (query) => api.get(`/restaurants/search?q=${query}`);

// Reseñas
export const getReviews = (restaurantId) => api.get(`/restaurants/${restaurantId}/reviews`);
export const createReview = (restaurantId, data) => api.post(`/restaurants/${restaurantId}/reviews`, data);

// Otras funciones que puedas necesitar
export const getStatistics = () => api.get('/statistics');