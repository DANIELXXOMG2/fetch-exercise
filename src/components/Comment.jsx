import React from 'react';

const Comment = ({ name, email, body }) => {
  return (
    <div className="comment">
      <h3>{name}</h3>
      <p className="email">{email}</p>
      <p>{body}</p>
    </div>
  );
};

export default Comment;