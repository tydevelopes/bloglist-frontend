import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import SimpleBlog from './SimpleBlog';

afterEach(cleanup);

describe('<SimpleBlog />', () => {
  let component;

  const blog = {
    title: 'React component testing',
    author: 'tyvoiax',
    likes: 10
  };

  test('should render content', () => {
    component = render(<SimpleBlog blog={blog} />);

    const div = component.container.querySelector('.blog-heading');
    expect(div).toHaveTextContent('React component testing');
    expect(div).toHaveTextContent('tyvoiax');

    const detailsDiv = component.container.querySelector('.blog-details');
    expect(detailsDiv).toHaveTextContent('10');
  });

  test('clicking the button twice calls event handler twice', async () => {
    const mockHandler = jest.fn();

    const { getByText } = render(
      <SimpleBlog blog={blog} onClick={mockHandler} />
    );

    const button = getByText('like');
    fireEvent.click(button);
    fireEvent.click(button);

    expect(mockHandler.mock.calls.length).toBe(2);
  });
});
