import React from 'react';
import BlogDetails from './BlogDetails';
import { connect } from 'react-redux';
import { toggleVisibility } from '../reducers/blogDetailsVisibilityReducer';

const Blog = ({ blog, shouldShowBlogDetails, toggleVisibility }) => {
  return (
    <div className="blog">
      <div className="blog-heading" onClick={toggleVisibility}>
        {blog.title} by {blog.author}
      </div>
      {shouldShowBlogDetails && <BlogDetails blog={blog} />}
    </div>
  );
};

const mapStateToProps = ({ shouldShowBlogDetails }, { blog }) => {
  return {
    blog,
    shouldShowBlogDetails
  };
};

const mapDispatchToProps = {
  toggleVisibility
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
