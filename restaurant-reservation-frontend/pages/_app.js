// pages/_app.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAuthenticated, getUserRole } from '../lib/auth';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/admin') {
      if (!isAuthenticated()) {
        router.push('/login');
      } else if (getUserRole() !== 'admin') {
        router.push('/'); // Redirige a la página principal si el usuario no es admin
      }
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;