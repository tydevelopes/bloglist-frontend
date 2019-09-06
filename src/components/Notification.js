import React from 'react';
import { connect } from 'react-redux';

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className={message.type}>{message.content}</div>;
};

const mapStateToProps = ({ message }) => {
  return {
    message
  };
};

export default connect(mapStateToProps)(Notification);
