import { useState } from 'react';
import { createReservation } from '../lib/api';

const ReservationForm = ({ restaurantId }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReservation({ restaurantId, date, time, guests });
      alert('Reservation created successfully!');
    } catch (error) {
      alert('Error creating reservation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default ReservationForm;