import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API } from 'Api';

export const UserSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const signup = async () => {
    try {
      const response = await axios.post(
        `${API}/users/signup`,
        JSON.stringify({ username, password }),
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
    signup();
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
            <button type="button" onClick={signup}>
              Signup
            </button>
            <Link to="/login">Login</Link>
          </form>
        </section>
      )}
    </>
  );
};
