import React from 'react';

const BlogForm = ({
  title,
  author,
  url,
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
            <input {...title} />
          </div>
          <div>
            Author
            <input {...author} />
          </div>
          <div>
            URL
            <input {...url} />
          </div>
          <button type="submit">create</button>
          <button type="button" onClick={toggleNoteFormVisibility}>
            cancel
          </button>
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
