export const toggleVisibility = () => {
  return {
    type: 'TOGGLE_DETAILS_VISIBILITY'
  };
};

const blogDetailsVisibilityReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_DETAILS_VISIBILITY':
      return !state;
    default:
      return state;
  }
};

export default blogDetailsVisibilityReducer;
