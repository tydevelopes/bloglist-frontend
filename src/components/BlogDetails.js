import React, { useState } from 'react';

const BlogDetails = ({ blog, incrementLikesByOne }) => {
  const [newLikes, setNewLikes] = useState(blog.likes);

  const updateLikes = async () => {
    console.log('id', blog.id);
    const likes = await incrementLikesByOne(blog.id, newLikes);
    setNewLikes(likes);
    console.log('likes: ', likes);
  };
  return (
    <div>
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
    </div>
  );
};

export default BlogDetails;
