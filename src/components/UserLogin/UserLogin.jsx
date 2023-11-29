import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/actions';

export default function UserLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
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
        <button type="button">Login</button>
      </form>
    </div>
  );
}
