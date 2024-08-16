import React, { useState } from 'react';
import { createRestaurant } from '../lib/api';

const RestaurantForm = ({ onSubmit }) => {
  const [restaurant, setRestaurant] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    capacity: '',
    rating: ''
  });

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createRestaurant(restaurant);
      console.log('Restaurant created:', response.data);
      onSubmit && onSubmit();
      setRestaurant({ name: '', address: '', phone: '', email: '', capacity: '', rating: '' });
    } catch (error) {
      console.error('Error creating restaurant:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={restaurant.name} onChange={handleChange} placeholder="Name" required />
      <input name="address" value={restaurant.address} onChange={handleChange} placeholder="Address" required />
      <input name="phone" value={restaurant.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="email" value={restaurant.email} onChange={handleChange} placeholder="Email" required type="email" />
      <input name="capacity" value={restaurant.capacity} onChange={handleChange} placeholder="Capacity" type="number" required />
      <input name="rating" value={restaurant.rating} onChange={handleChange} placeholder="Rating" type="number" step="0.1" min="0" max="5" />
      <button type="submit">Create Restaurant</button>
    </form>
  );
};

export default RestaurantForm;