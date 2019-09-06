import React from 'react';
import { connect } from 'react-redux';
import { likeBlog, removeBlog } from '../reducers/blogReducer';
import { notification } from '../reducers/messageReducer';

const BlogDetails = ({
  logStatus,
  blog,
  likeBlog,
  removeBlog,
  notification
}) => {
  const handleDelete = async () => {
    try {
      removeBlog(blog.id);
      notification({ content: 'Blog successfully deleted', type: 'success' });
    } catch (error) {
      notification({
        content: `fail to remove blog: ${error.message}`,
        type: 'failure'
      });
    }
  };

  const handleLike = () => {
    try {
      likeBlog(blog);
    } catch (error) {
      notification({ content: error.message, type: 'failure' });
    }
  };

  return (
    <div className="blog-details">
      <div>
        <a href={blog.url} target="_blank" rel="noopener noreferrer">
          {blog.url}
        </a>
      </div>
      <div>
        {blog.likes} likes
        <button onClick={handleLike}>like</button>
      </div>
      <div>added by {blog.user.username}</div>
      {blog.user.username === logStatus.user.username ? (
        <button onClick={handleDelete}>remove</button>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ logStatus }, { blog }) => {
  return {
    logStatus,
    blog
  };
};

const mapDispatchToProps = {
  likeBlog,
  removeBlog,
  notification
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDetails);
