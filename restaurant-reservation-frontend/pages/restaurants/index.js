import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { getRestaurants } from '../../lib/api';

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await getRestaurants();
      setRestaurants(response.data);
    };
    fetchRestaurants();
  }, []);

  return (
    <Layout>
      <h1>Restaurants</h1>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>{restaurant.name}</div>
      ))}
    </Layout>
  );
}