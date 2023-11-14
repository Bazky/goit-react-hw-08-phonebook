import React from 'react';

export const UserLogin = () => {
  return (
    <div>
      <h1>Log up</h1>
      <form>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
