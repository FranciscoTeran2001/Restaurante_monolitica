// pages/admin.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import RestaurantForm from '../components/RestaurantForm';
import ReservationForm from '../components/ReservationForm';
import UserForm from '../components/UserForm';
import { isAuthenticated, getUserRole } from '../lib/auth';
import { getRestaurants, getReservations, getUsers } from '../lib/api';

const AdminPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated(req) || getUserRole(req) !== 'admin') {
        router.push('/login');
      } else {
        setIsLoading(false);
        fetchData();
      }
    };
    checkAuth();
  }, [router]);

  const fetchData = async () => {
    try {
      const [restaurantsRes, reservationsRes, usersRes] = await Promise.all([
        getRestaurants(),
        getReservations(),
        getUsers()
      ]);
      setRestaurants(restaurantsRes.data);
      setReservations(reservationsRes.data);
      setUsers(usersRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>Admin Dashboard</h1>
      
      <section>
        <h2>Restaurants</h2>
        <RestaurantForm onSubmit={fetchData} />
        <ul>
          {restaurants.map(restaurant => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Reservations</h2>
        <ReservationForm onSubmit={fetchData} />
        <ul>
          {reservations.map(reservation => (
            <li key={reservation.id}>
              {reservation.user_id} - {reservation.restaurant_id} - {reservation.reservation_date}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Users</h2>
        <UserForm onSubmit={fetchData} />
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.email} - {user.role}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default AdminPage;