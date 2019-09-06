import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import DisplayBlogs from './components/DisplayBlogs';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import { initializeBlogs } from './reducers/blogReducer';
import { getAllUsers } from './reducers/userReducer';
import DisplayUsers from './components/DisplayUsers';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

function App({ logStatus, initializeBlogs, getAllUsers }) {
  useEffect(() => {
    if (logStatus.isLoggedin) {
      initializeBlogs();
      getAllUsers();
    }
  }, []);

  return (
    <div className="App">
      <Notification />
      {logStatus.isLoggedin ? (
        <>
          <DisplayBlogs />
          <BlogForm />
        </>
      ) : (
        <LoginForm />
      )}
      <DisplayUsers />
    </div>
  );
}

const mapStateToProps = ({ logStatus }) => {
  return {
    logStatus
  };
};

const mapDispatchToProps = {
  initializeBlogs,
  getAllUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
