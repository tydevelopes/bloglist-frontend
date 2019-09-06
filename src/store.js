import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './reducers/userReducer';
import blogReducer from './reducers/blogReducer';
import loginReducer from './reducers/loginReducer';
import loginFormReducer from './reducers/loginFormReducer';
import blogFormReducer from './reducers/blogFormReducer';
import messageReducer from './reducers/messageReducer';
import blogFormVisibilityReducer from './reducers/blogFormVisibilityReducer';
import blogDetailsVisibilityReducer from './reducers/blogDetailsVisibilityReducer';

const reducer = combineReducers({
  users: userReducer,
  blogs: blogReducer,
  logStatus: loginReducer,
  loginForm: loginFormReducer,
  blogForm: blogFormReducer,
  message: messageReducer,
  shouldShowBlogForm: blogFormVisibilityReducer,
  shouldShowBlogDetails: blogDetailsVisibilityReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
