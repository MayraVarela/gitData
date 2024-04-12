import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from './actions';
import UserDetail from './UserDetail';

const App = ({ username }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData(username));
  }, [dispatch, username]);

  return (
    <div>
      <h1>User Details</h1>
      <UserDetail />
    </div>
  );
};

export default App;
