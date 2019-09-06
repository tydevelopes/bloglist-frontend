import React from 'react';
import Blog from './Blog';
import { connect } from 'react-redux';
import { logout } from '../reducers/loginReducer';
import { notification } from '../reducers/messageReducer';

const DisplayBlogs = ({ blogs, logStatus, logout, notification }) => {
  const handleLogout = () => {
    logout();
    notification({
      content: `Goodbye ${logStatus.user.username}`,
      type: 'success'
    });
  };

  return (
    <div>
      <h2>blogs</h2>
      <p>
        {logStatus.user.username} logged in
        <button onClick={handleLogout}>logout</button>
      </p>
      {blogs.map(blog => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ blogs, logStatus }) => {
  return {
    blogs,
    logStatus
  };
};

const mapDispatchToProps = {
  logout,
  notification
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayBlogs);
