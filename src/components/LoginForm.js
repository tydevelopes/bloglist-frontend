import React from 'react';
import { connect } from 'react-redux';
import {
  setUsername,
  setPassword,
  clearInputs
} from '../reducers/loginFormReducer';
import { login } from '../reducers/loginReducer';
import { notification } from '../reducers/messageReducer';
import { initializeBlogs } from '../reducers/blogReducer';
import MissingInputError from '../customErrors/emptyInput';

const LoginForm = ({
  loginForm,
  logStatus,
  setUsername,
  setPassword,
  login,
  notification,
  initializeBlogs
}) => {
  const handleLogin = async event => {
    event.preventDefault();

    try {
      if (!(loginForm.username.trim() && loginForm.password.trim())) {
        throw new MissingInputError('Input cannot be empty');
      }
      login({
        username: loginForm.username,
        password: loginForm.password
      });
      initializeBlogs();
      notification({
        content: `Welcome ${logStatus.user.username}`,
        type: 'success'
      });
    } catch (exception) {
      console.log('error logging in: ', exception);
      notification({ content: 'Wrong credentials', type: 'failure' });
    } finally {
      // reset
      clearInputs();
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>log in to application</h2>
      <div>
        username
        <input type="text" onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
        password
        <input type="text" onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="submit">login</button>
    </form>
  );
};

const mapStateToProps = ({ loginForm, logStatus }) => {
  return {
    loginForm,
    logStatus
  };
};

const mapDispatchToProps = {
  setUsername,
  setPassword,
  clearInputs,
  login,
  notification,
  initializeBlogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
