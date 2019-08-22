import React, { useState } from 'react';

const BlogDetails = ({ blog, incrementLikesByOne, deleteBlog, user }) => {
  const [newLikes, setNewLikes] = useState(blog.likes);

  const updateLikes = async () => {
    const likes = await incrementLikesByOne(blog.id, newLikes);
    setNewLikes(likes);
  };

  return (
    <div className="blog-details">
      <div>
        <a href={blog.url} target="_blank" rel="noopener noreferrer">
          {blog.url}
        </a>
      </div>
      <div>
        {newLikes} likes
        <button onClick={updateLikes}>like</button>
      </div>
      <div>added by {blog.user.username}</div>
      {blog.user.username === user.username ? (
        <button onClick={() => deleteBlog(blog.id)}>remove</button>
      ) : null}
    </div>
  );
};

export default BlogDetails;

//FIXME:- Likes not updating when BlogDetails closed
