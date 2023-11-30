import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/actions';
import { useNavigate } from 'react-router';

export default function UserLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    console.log(navigate('/contacts'));
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
