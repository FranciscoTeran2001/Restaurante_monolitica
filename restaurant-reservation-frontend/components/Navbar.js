import Link from 'next/link';

const Navbar = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/restaurants">Restaurants</Link>
    <Link href="/reservations">My Reservations</Link>
  </nav>
);

export default Navbar;