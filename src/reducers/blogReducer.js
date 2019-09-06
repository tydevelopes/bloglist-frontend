import blogService from '../services/blogs';

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll();
    blogs.sort((a, b) => a.likes - b.likes);
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    });
  };
};

export const createBlog = content => {
  return async dispatch => {
    const newBlog = await blogService.create(content);
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    });
  };
};

export const removeBlog = id => {
  return async dispatch => {
    await blogService.remove(id);
    dispatch({
      type: 'REMOVE_BLOG',
      data: { id }
    });
  };
};

export const likeBlog = blog => {
  return async dispatch => {
    const updatedBlog = await blogService.update(blog.id, {
      ...blog,
      likes: blog.likes + 1
    });
    dispatch({
      type: 'LIKE_A_BLOG',
      data: updatedBlog
    });
  };
};

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return action.data;
    case 'NEW_BLOG':
      return [...state, action.data].sort((a, b) => a.likes - b.likes);
    case 'REMOVE_BLOG':
      return state.filter(blog => blog.id !== action.data.id);
    case 'LIKE_A_BLOG':
      return state.map(blog => {
        if (blog.id === action.data.id) {
          return action.data;
        }
        return blog;
      });
    default:
      return state;
  }
};

export default blogReducer;
