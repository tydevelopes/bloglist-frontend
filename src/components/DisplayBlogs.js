import React from 'react';
import Blog from './Blog';

const DisplayBlogs = ({
  blogs,
  userName,
  handleLogout,
  incrementLikesByOne
}) => {
  return (
    <div>
      <h2>blogs</h2>
      <p>
        {userName} logged in
        <button onClick={handleLogout}>logout</button>
      </p>
      {blogs.map(blog => (
        <Blog
          blog={blog}
          incrementLikesByOne={incrementLikesByOne}
          key={blog.id}
        />
      ))}
    </div>
  );
};

export default DisplayBlogs;
