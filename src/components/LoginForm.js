import React from 'react';

const LoginForm = ({ handleLogin, username, password }) => {
  return (
    <form onSubmit={handleLogin}>
      <h2>log in to application</h2>
      <div>
        username
        <input {...username} />
      </div>
      <div>
        password
        <input {...password} />
      </div>
      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
