import React from 'react';
import Blog from './Blog';

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

export default DisplayBlogs;
