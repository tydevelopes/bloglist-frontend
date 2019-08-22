import React from 'react';
import Blog from './Blog';
import PropTypes from 'prop-types';

const DisplayBlogs = ({
  blogs,
  user,
  handleLogout,
  incrementLikesByOne,
  deleteBlog
}) => {
  return (
    <div>
      <h2>blogs</h2>
      <p>
        {user.userName} logged in
        <button onClick={handleLogout}>logout</button>
      </p>
      {blogs.map(blog => (
        <Blog
          blog={blog}
          incrementLikesByOne={incrementLikesByOne}
          deleteBlog={deleteBlog}
          user={user}
          key={blog.id}
        />
      ))}
    </div>
  );
};

DisplayBlogs.propTypes = {
  blogs: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
  incrementLikesByOne: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired
};
export default DisplayBlogs;
