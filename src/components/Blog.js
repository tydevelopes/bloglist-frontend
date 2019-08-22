import React, { useState } from 'react';
import BlogDetails from './BlogDetails';

const Blog = ({ blog, incrementLikesByOne, deleteBlog, user }) => {
  const [shouldShowBlogDetails, setShouldShowBlogDetails] = useState(false);

  const toggleBlogDetailsVisibility = () =>
    setShouldShowBlogDetails(!shouldShowBlogDetails);

  return (
    <div className="blog">
      <div className="blog-heading" onClick={toggleBlogDetailsVisibility}>
        {blog.title} by {blog.author}
      </div>
      {shouldShowBlogDetails && (
        <BlogDetails
          blog={blog}
          incrementLikesByOne={incrementLikesByOne}
          deleteBlog={deleteBlog}
          user={user}
        />
      )}
    </div>
  );
};

export default Blog;
