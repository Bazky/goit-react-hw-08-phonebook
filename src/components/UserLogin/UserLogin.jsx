import React, { useState } from 'react';
import axios from 'axios';
import { API } from 'Api';

export const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');

  const login = async () => {
    try {
      const response = await axios.post(
        `${API}/users/login`,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      return response.status === 201 ? setSuccess(true) : setSuccess(false);
    } catch {
      console.log('error');
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    login();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};
