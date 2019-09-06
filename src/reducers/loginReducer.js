import loginService from '../services/login';
import blogService from '../services/blogs';

export const login = userCredentials => {
  return async dispatch => {
    const user = await loginService.login(userCredentials);
    localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
    blogService.setToken(user.token);
    dispatch({
      type: 'USER_IS_LOGGED_IN',
      data: {
        isLoggedin: true,
        user
      }
    });
  };
};

export const logout = () => {
  return async dispatch => {
    localStorage.removeItem('loggedBlogAppUser');
    dispatch({
      type: 'USER_IS_LOGGED_OUT',
      data: {
        isLoggedin: false,
        user: null
      }
    });
  };
};

const initLoginStatus = () => {
  const loggedUserJSON = localStorage.getItem('loggedBlogAppUser');
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON);
    blogService.setToken(user.token);
    return {
      isLoggedin: true,
      user
    };
  }
  return {
    isLoggedin: false,
    user: null
  };
};

const loginReducer = (state = initLoginStatus(), action) => {
  switch (action.type) {
    case 'USER_IS_LOGGED_IN':
      return action.data;
    case 'USER_IS_LOGGED_OUT':
      return action.data;
    default:
      return state;
  }
};
export default loginReducer;
