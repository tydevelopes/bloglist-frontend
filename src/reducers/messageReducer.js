export const showMessage = message => {
  return {
    type: 'SHOW_MESSAGE',
    data: message
  };
};

export const removeMessage = () => {
  return {
    type: 'REMOVE_MESSAGE',
    data: null
  };
};

export const notification = message => {
  return async dispatch => {
    dispatch(showMessage(message));
    setTimeout(() => {
      dispatch(removeMessage());
    }, 3000);
  }
}

const messageReducer = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return action.data;
    case 'REMOVE_MESSAGE':
      return action.data;
    default:
      return state;
  }
};

export default messageReducer;
