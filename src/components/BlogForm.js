import React from 'react';

const BlogForm = ({
  handleTitleInput,
  handleAuthorInput,
  handleURLInput,
  addNewBlog,
  shouldShowNoteForm,
  toggleNoteFormVisibility
}) => {
  const BlogFormToRender = () => {
    return (
      <div>
        <h2>create new blog</h2>
        <form onSubmit={addNewBlog}>
          <div>
            Title
            <input
              type="text"
              name="Title"
              onChange={({ target }) => handleTitleInput(target.value)}
            />
          </div>
          <div>
            Author
            <input
              type="text"
              name="Author"
              onChange={({ target }) => handleAuthorInput(target.value)}
            />
          </div>
          <div>
            URL
            <input
              type="text"
              name="URL"
              onChange={({ target }) => handleURLInput(target.value)}
            />
          </div>
          <button type="submit">create</button>
          <button type="button" onClick={toggleNoteFormVisibility}>cancel</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {shouldShowNoteForm ? (
        BlogFormToRender()
      ) : (
        <button onClick={toggleNoteFormVisibility}>Add New Blog</button>
      )}
    </div>
  );
};

export default BlogForm;
