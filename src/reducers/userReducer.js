import userService from '../services/users';

export const getAllUsers = () => {
  return async dispatch => {
    const users = await userService.getAll();
    users.sort((a, b) => a.blogs.length - b.blogs.length);
    console.log('users: ', users[3].blogs);
    dispatch({
      type: 'GET_USERS',
      data: users
    });
  };
};

export const createUser = content => {
  return async dispatch => {
    const newUser = await userService.create(content);
    dispatch({
      type: 'NEW_USER',
      data: newUser
    });
  };
};

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.data;
    case 'NEW_USER':
      return [action.data, ...state];
    default:
      return state;
  }
};

export default userReducer;

// will be deleted
