import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    } else {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(login({ email, password }));
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
