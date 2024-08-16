// lib/cookies.js
import Cookies from 'js-cookie';

export function getCookie(key, req) {
  if (typeof window !== 'undefined') {
    // Cliente: usa js-cookie
    return Cookies.get(key);
  } else {
    // Servidor: usa el objeto req
    if (req && req.headers.cookie) {
      const rawCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith(`${key}=`));
      if (!rawCookie) {
        return undefined;
      }
      return rawCookie.split('=')[1];
    }
    return undefined;
  }
}

export function setCookie(key, value, options = {}) {
  Cookies.set(key, value, options);
}

export function removeCookie(key) {
  Cookies.remove(key);
}