import React, { useState } from 'react';
import BlogDetails from './BlogDetails';

const Blog = ({ blog, incrementLikesByOne }) => {
  const [shouldShowBlogDetails, setShouldShowBlogDetails] = useState(false);

  const toggleBlogDetailsVisibility = () =>
    setShouldShowBlogDetails(!shouldShowBlogDetails);

  return (
    <div className="blog">
      <div onClick={toggleBlogDetailsVisibility}>
        {blog.title} by {blog.author}
      </div>
      {shouldShowBlogDetails && (
        <BlogDetails blog={blog} incrementLikesByOne={incrementLikesByOne} />
      )}
    </div>
  );
};

export default Blog;
