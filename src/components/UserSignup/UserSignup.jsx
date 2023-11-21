import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from 'redux/actions';
import { useDispatch } from 'react-redux';

export const UserSignup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const signup = () => {
    dispatch(register({ username, email, password }));
    setSuccess(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <Link to="/login">Login</Link>
        </section>
      ) : (
        <section>
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Username
              <input
                type="text"
                value={username}
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
            <button type="submit" onClick={signup}>
              Signup
            </button>
            <Link to="/login">Login</Link>
          </form>
        </section>
      )}
    </>
  );
};
