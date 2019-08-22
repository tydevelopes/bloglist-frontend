import React from 'react';

const SimpleBlog = ({ blog, onClick }) => (
  <div className="blog">
    <div className="blog-heading">
      {blog.title} {blog.author}
    </div>
    <div className="blog-details">
      blog has {blog.likes} likes
      <button onClick={onClick}>like</button>
    </div>
  </div>
);

export default SimpleBlog;
