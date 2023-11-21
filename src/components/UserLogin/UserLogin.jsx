import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const UserLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const login = () => {
    dispatch(login({ email, password }));
    setSuccess(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
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
        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};
