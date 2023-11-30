import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from 'redux/actions';
import { useDispatch } from 'react-redux';

export default function UserSignup() {
  const dispatch = useDispatch();
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <>
      <section>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={name}
              onChange={event => setUsername(event.target.value)}
            />
          </label>
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
          <button type="submit">Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </section>
    </>
  );
}
