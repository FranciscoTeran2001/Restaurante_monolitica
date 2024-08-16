import React, { useState } from 'react';
import { createReservation } from '../lib/api';

const ReservationForm = ({ onSubmit }) => {
  const [reservation, setReservation] = useState({
    restaurant_id: '',
    user_id: '',
    reservation_date: '',
    number_of_people: '',
    special_requests: '',
    status: 'pending'
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createReservation(reservation);
      console.log('Reservation created:', response.data);
      onSubmit && onSubmit();
      setReservation({ restaurant_id: '', user_id: '', reservation_date: '', number_of_people: '', special_requests: '', status: 'pending' });
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="restaurant_id" value={reservation.restaurant_id} onChange={handleChange} placeholder="Restaurant ID" required />
      <input name="user_id" value={reservation.user_id} onChange={handleChange} placeholder="User ID" required />
      <input name="reservation_date" value={reservation.reservation_date} onChange={handleChange} type="datetime-local" required />
      <input name="number_of_people" value={reservation.number_of_people} onChange={handleChange} type="number" placeholder="Number of People" required />
      <textarea name="special_requests" value={reservation.special_requests} onChange={handleChange} placeholder="Special Requests" />
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default ReservationForm;