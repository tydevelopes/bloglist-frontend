import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import Blog from './Blog';

afterEach(cleanup);

describe('<Blog />', () => {
  let component;

  const blog = {
    title: 'React component testing',
    author: 'tyvoiax',
    likes: 10,
    user: {
      username: 'emma'
    }
  };
  const user = {
    username: 'emma'
  };

  component = render(<Blog blog={blog} user={user} />);

  // console.log('first render');
  // component.debug();

  test('should render content', () => {
    const div = component.container.querySelector('.blog');
    expect(div).toHaveTextContent('React component testing');
    expect(div).toHaveTextContent('tyvoiax');

    //component.debug();
    //console.log(prettyDOM(div));
  });

  test('should render details', () => {
    console.log('blog before click');
    component.debug();
    console.log('------------------------------');

    const div = component.container.querySelector('.blog-heading');
    fireEvent.click(div);
    const details = component.container.querySelector('.blog-details');

    console.log('blog after first click');
    component.debug();
    console.log('-------------------------------');

    expect(details).toHaveTextContent('likes');

    fireEvent.click(div);
    console.log('blog after second click');
    component.debug();
    console.log('------------------------------');

    expect(div).not.toHaveTextContent('likes');
  });
});
