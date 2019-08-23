import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import loginService from './services/login';
import blogService from './services/blogs';
import DisplayBlogs from './components/DisplayBlogs';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import MissingInputError from './customErrors/emptyInput';
import { useField } from './hooks';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState(null);
  const username = useField('text');
  const password = useField('text');
  const [user, setUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const title = useField('text');
  const author = useField('text');
  const url = useField('text');
  const [shouldShowNoteForm, setShouldShowNoteForm] = useState(false);

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedBlogAppUser');
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
    blogs.sort((a, b) => a.likes - b.likes);
    setBlogs(blogs);
  };

  const removeNotification = () => {
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };

  // Event handlers
  const handleLogin = async event => {
    event.preventDefault();

    try {
      const user = await loginService.login({ username: username.value, password: password.value });

      localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
      setIsUserLoggedIn(true);
      setMessage({ content: `Welcome ${user.username}`, type: 'success' });
      fetchBlogs();

      // reset
      username.onChange();
      password.onChange();
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
    setMessage({ content: `Goodbye ${user.username}`, type: 'success' });
    removeNotification();
  };

  const toggleNoteFormVisibility = () =>
    setShouldShowNoteForm(!shouldShowNoteForm);

  const addNewBlog = async event => {
    event.preventDefault();
    try {
      if (!(title.value.trim() && author.value.trim() && url.value.trim())) {
        throw new MissingInputError('Input cannot be empty');
      }
      const blogObject = {
        title: title.value,
        author: author.value,
        url: url.value
      };
      const returnedBlog = await blogService.create(blogObject);
      setBlogs([...blogs, returnedBlog].sort((a, b) => a.likes - b.likes));
      setMessage({ content: 'New blog successfully created', type: 'success' });

      // reset inputs- with a little hack
      title.onChange();
      author.onChange();
      url.onChange();
    } catch (error) {
      if (error instanceof MissingInputError) {
        setMessage({ content: error.message, type: 'failure' });
      } else {
        console.log('error creating blog: ', error);
        setMessage({ content: 'Could not add new blog', type: 'failure' });
      }
    } finally {
      removeNotification();
      toggleNoteFormVisibility();
    }
  };

  const incrementLikesByOne = async (id, oldLikes) => {
    const newObject = {
      likes: oldLikes + 1
    };
    try {
      const { likes } = await blogService.update(id, newObject);
      return likes;
    } catch (error) {
      setMessage({ content: error.message, type: 'failure' });
    } finally {
      removeNotification();
    }
  };

  const deleteBlog = async id => {
    try {
      await blogService.remove(id);
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      console.log('updated blogs: ', updatedBlogs);
      setBlogs(updatedBlogs);
      setMessage({ content: 'Blog successfully deleted', type: 'success' });
    } catch (error) {
      setMessage({
        content: `fail to remove blog: ${error.message}`,
        type: 'failure'
      });
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
            user={user}
            handleLogout={handleLogout}
            incrementLikesByOne={incrementLikesByOne}
            deleteBlog={deleteBlog}
          />
          <BlogForm
            title={title}
            author={author}
            url={url}
            addNewBlog={addNewBlog}
            shouldShowNoteForm={shouldShowNoteForm}
            toggleNoteFormVisibility={toggleNoteFormVisibility}
          />
        </>
      ) : (
        <LoginForm
          handleLogin={handleLogin}
          username={username}
          password={password}
        />
      )}
    </div>
  );
}

export default App;
