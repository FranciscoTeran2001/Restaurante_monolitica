import Link from 'next/link';
import { isAuthenticated, getUserRole } from '../lib/auth';

const Navbar = () => {
  const isAdmin = isAuthenticated() && getUserRole() === 'admin';

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/restaurants">Restaurants</Link>
      <Link href="/reservations">My Reservations</Link>
      {isAdmin && <Link href="/admin">Admin Dashboard</Link>}
    </nav>
  );
};

export default Navbar;