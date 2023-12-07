import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/actions';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(login({ email, password }));
      if (isLoggedIn) {
        navigate('/contacts');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
