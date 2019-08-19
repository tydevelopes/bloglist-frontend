import React from 'react';

const LoginForm = ({ handleLogin, handleNameInput, handlePasswordInput }) => {
  return (
    <form onSubmit={handleLogin}>
      <h2>log in to application</h2>
      <div>
        username
        <input
          type="text"
          name="Username"
          onChange={({ target }) => handleNameInput(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          name="Password"
          onChange={({ target }) => handlePasswordInput(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
