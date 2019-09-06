export const toggleVisibility = () => {
  return {
    type: 'TOGGLE_FORM_VISIBILITY'
  };
};

const blogFormVisibilityReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM_VISIBILITY':
      return !state;
    default:
      return state;
  }
};

export default blogFormVisibilityReducer;
