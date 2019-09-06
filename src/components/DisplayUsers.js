import React from 'react';
import { connect } from 'react-redux';

const DisplayUsers = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>user</th>
          <th>blogs created</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.blogs.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

export default connect(mapStateToProps)(DisplayUsers);
