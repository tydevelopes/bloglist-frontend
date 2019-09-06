export const setUsername = value => {
  return {
    type: 'SET_USERNAME',
    data: { value }
  };
};

export const setPassword = value => {
  return {
    type: 'SET_PASSWORD',
    data: { value }
  };
};

export const clearInputs = () => {
  return {
    type: 'RESET'
  };
};

const loginFormReducer = (state = { username: '', password: '' }, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.data.value };
    case 'SET_PASSWORD':
      return { ...state, password: action.data.value };
    case 'RESET':
      return {
        username: '',
        password: ''
      };
    default:
      return state;
  }
};

export default loginFormReducer;
