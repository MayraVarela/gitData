// UserDetail.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const UserDetail = () => {
  const userData = useSelector(state => state.userData);
  const error = useSelector(state => state.error);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={userData.avatar_url} alt="User Avatar" />
      <h2>{userData.name}</h2>
      <p>Username: {userData.login}</p>
      <p>Followers: {userData.followers}</p>
      <p>Public Repos: {userData.public_repos}</p>
    </div>
  );
};

export default UserDetail;
