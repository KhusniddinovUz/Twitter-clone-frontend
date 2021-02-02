import React from 'react';
import { useSelector } from 'react-redux';

const FoundUsers = () => {
  const users = useSelector((state) => state.users.foundusers);
  return (
    <div className='FoundUsers'>
      {users && users.map((user) => <div>{user.username}</div>)}
    </div>
  );
};

export default FoundUsers;
