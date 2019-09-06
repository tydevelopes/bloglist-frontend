export const setTitle = value => {
  return {
    type: 'SET_TITLE',
    data: { value }
  };
};

export const setAuthor = value => {
  return {
    type: 'SET_AUTHOR',
    data: { value }
  };
};

export const setUrl = value => {
  return {
    type: 'SET_URL',
    data: { value }
  };
};

export const clearInputs = () => {
  return {
    type: 'RESET'
  };
};

const blogFormReducer = (
  state = { title: '', author: '', url: '' },
  action
) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.data.value };
    case 'SET_AUTHOR':
      return { ...state, author: action.data.value };
    case 'SET_URL':
      return { ...state, url: action.data.value };
    case 'RESET':
      return {
        title: '',
        author: '',
        url: ''
      };
    default:
      return state;
  }
};

export default blogFormReducer;
