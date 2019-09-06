import React from 'react';
import { connect } from 'react-redux';
import {
  setTitle,
  setAuthor,
  setUrl,
  clearInputs
} from '../reducers/blogFormReducer';
import { createBlog } from '../reducers/blogReducer';
import { toggleVisibility } from '../reducers/blogFormVisibilityReducer';
import { notification } from '../reducers/messageReducer';
import MissingInputError from '../customErrors/emptyInput';
import { getAllUsers } from '../reducers/userReducer';

const BlogForm = ({
  shouldShowBlogForm,
  blogForm,
  setTitle,
  setAuthor,
  clearInputs,
  setUrl,
  createBlog,
  toggleVisibility,
  notification,
  getAllUsers
}) => {
  const addNewBlog = async event => {
    event.preventDefault();
    try {
      if (
        !(
          blogForm.title.trim() &&
          blogForm.author.trim() &&
          blogForm.url.trim()
        )
      ) {
        throw new MissingInputError('Input cannot be empty');
      }
      const blogObject = {
        title: blogForm.title,
        author: blogForm.author,
        url: blogForm.url
      };
      await createBlog(blogObject);
      await getAllUsers();

      notification({
        content: 'New blog successfully created',
        type: 'success'
      });

      // reset inputs- with a little hack
      clearInputs();
    } catch (error) {
      if (error instanceof MissingInputError) {
        notification({ content: error.message, type: 'failure' });
      } else {
        console.log('error creating blog: ', error);
        notification({ content: 'Could not add new blog', type: 'failure' });
      }
    } finally {
      toggleVisibility();
    }
  };

  const BlogFormToRender = () => {
    return (
      <div>
        <h2>create new blog</h2>
        <form onSubmit={addNewBlog}>
          <div>
            Title
            <input type="text" onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            Author
            <input type="text" onChange={e => setAuthor(e.target.value)} />
          </div>
          <div>
            URL
            <input type="text" onChange={e => setUrl(e.target.value)} />
          </div>
          <button type="submit">create</button>
          <button type="button" onClick={toggleVisibility}>
            cancel
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {shouldShowBlogForm ? (
        BlogFormToRender()
      ) : (
        <button onClick={toggleVisibility}>Add New Blog</button>
      )}
    </div>
  );
};

const mapStateToProps = ({ shouldShowBlogForm, blogForm }) => {
  return {
    shouldShowBlogForm,
    blogForm
  };
};

const mapDispatchToProps = {
  setTitle,
  setAuthor,
  setUrl,
  clearInputs,
  createBlog,
  toggleVisibility,
  notification,
  getAllUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogForm);
