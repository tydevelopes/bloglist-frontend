import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, waitForElement } from '@testing-library/react';
jest.mock('./services/blogs');
import App from './App';

afterEach(cleanup);

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = render(<App />);
    component.rerender(<App />);

    await waitForElement(() => component.getByText('login'));

    expect(component.container).toHaveTextContent('log in to application');
    expect(component.container).toHaveTextContent('username');
    expect(component.container).toHaveTextContent('password');
    expect(component.container).not.toHaveTextContent('blogs');
    expect(component.container).not.toHaveTextContent('logged in');
    expect(component.container).not.toHaveTextContent('logout');
  });

  test('should render all blogs if user is logged in', async () => {
    const user = {
      username: 'kojo',
      name: 'Emma',
      token: '5d563b7ee8697'
    };
    localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));

    const component = render(<App />);
    component.rerender(<App />);

    await waitForElement(() => component.container.querySelector('.blog'));

    const blogs = component.container.querySelectorAll('.blog');
    expect(blogs.length).toBe(7);

    component.debug();

    expect(component.container).toHaveTextContent('blogs');
    expect(component.container).toHaveTextContent('logged in');
    expect(component.container).toHaveTextContent('logout');

    expect(component.container).toHaveTextContent('First class tests');
    expect(component.container).toHaveTextContent('hope it workes');
    expect(component.container).not.toHaveTextContent('money.io');
    expect(component.container).toHaveTextContent('abeuti');
  });
});
