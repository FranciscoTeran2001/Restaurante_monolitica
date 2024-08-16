// lib/auth.js
import { getCookie, setCookie, removeCookie } from './cookies';

export const login = (token, user) => {
  setCookie('token', token, { expires: 7 }); // La cookie expirará en 7 días
  setCookie('user', JSON.stringify(user), { expires: 7 });
};

export const logout = () => {
  removeCookie('token');
  removeCookie('user');
};

export const isAuthenticated = (req) => {
  return !!getCookie('token', req);
};

export const getUserRole = (req) => {
  const user = getCookie('user', req);
  return user ? JSON.parse(user).role : null;
};

export const getCurrentUser = (req) => {
  const user = getCookie('user', req);
  return user ? JSON.parse(user) : null;
};