import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import loginService from './services/login';
import blogService from './services/blogs';
import DisplayBlogs from './components/DisplayBlogs';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import MissingInputError from './customErrors/emptyInput';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');
  const [blogURL, setBlogURL] = useState('');

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedBlogAppUser');
    console.log(loggedUserJSON);
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
      setIsUserLoggedIn(true);
      fetchBlogs();
    }
  }, []);

  // Helper functions
  const fetchBlogs = async () => {
    const blogs = await blogService.getAll();
    setBlogs(blogs);
  };

  const removeNotification = () => {
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };

  // Event handlers
  const handleNameInput = value => {
    setUsername(value);
  };

  const handlePasswordInput = value => {
    setPassword(value);
  };

  const handleLogin = async event => {
    event.preventDefault();
    console.log('logging in with', username, password);

    try {
      const user = await loginService.login({ username, password });

      localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
      setUsername('');
      setPassword('');
      setIsUserLoggedIn(true);
      setMessage({ content: `Welcome ${user.name}`, type: 'success' });
      fetchBlogs();
    } catch (exception) {
      console.log('error logging in: ', exception);
      setMessage({ content: 'Wrong credentials', type: 'failure' });
    } finally {
      removeNotification();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedBlogAppUser');
    setIsUserLoggedIn(false);
    setMessage({ content: `Goodbye ${user.name}`, type: 'success' });
    removeNotification();
  };

  const handleTitleInput = value => {
    console.log(value);
    setBlogTitle(value);
  };
  const handleAuthorInput = value => {
    console.log(value);
    setBlogAuthor(value);
  };
  const handleURLInput = value => {
    console.log(value);
    setBlogURL(value);
  };

  const addNewBlog = async event => {
    event.preventDefault();
    try {
      if (!(blogTitle.trim() && blogAuthor.trim() && blogURL.trim())) {
        throw new MissingInputError('Input cannot be empty');
      }
      const blogObject = {
        title: blogTitle,
        author: blogAuthor,
        url: blogURL
      };
      const returnedBlog = await blogService.create(blogObject);
      setBlogs([...blogs, returnedBlog]);
      setBlogTitle('');
      setBlogAuthor('');
      setBlogURL('');
      setMessage({ content: 'New blog successfully created', type: 'success' });
    } catch (error) {
      if (error instanceof MissingInputError) {
        setMessage({ content: error.message, type: 'failure' });
      } else {
        console.log('error creating blog: ', error);
        setMessage({ content: 'Could not add new blog', type: 'failure' });
      }
    } finally {
      removeNotification();
    }
  };

  return (
    <div className="App">
      <Notification message={message} />
      {isUserLoggedIn ? (
        <>
          <DisplayBlogs
            blogs={blogs}
            userName={user.name}
            handleLogout={handleLogout}
          />
          <BlogForm
            handleTitleInput={handleTitleInput}
            handleAuthorInput={handleAuthorInput}
            handleURLInput={handleURLInput}
            addNewBlog={addNewBlog}
          />
        </>
      ) : (
        <LoginForm
          handleLogin={handleLogin}
          handleNameInput={handleNameInput}
          handlePasswordInput={handlePasswordInput}
        />
      )}
    </div>
  );
}

export default App;