import React, { useState } from 'react';
import { createUser } from '../lib/api';

const UserForm = ({ onSubmit }) => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    role: 'client'
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(user);
      console.log('User created:', response.data);
      onSubmit && onSubmit();
      setUser({ first_name: '', last_name: '', email: '', phone: '', password: '', role: 'client' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="first_name" value={user.first_name} onChange={handleChange} placeholder="First Name" required />
      <input name="last_name" value={user.last_name} onChange={handleChange} placeholder="Last Name" required />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" type="email" required />
      <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="password" value={user.password} onChange={handleChange} placeholder="Password" type="password" required />
      <select name="role" value={user.role} onChange={handleChange}>
        <option value="client">Client</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;