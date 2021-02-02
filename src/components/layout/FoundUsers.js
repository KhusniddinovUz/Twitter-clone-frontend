import React from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

const FoundUsers = () => {
  const users = useSelector((state) => state.users.foundusers);
  return (
    <div className='FoundUsers container mb-1'>
      {users &&
        users.map((user) => (
          <div className='mb-2' key={v4()}>
            {user.username}
          </div>
        ))}
    </div>
  );
};

export default FoundUsers;
