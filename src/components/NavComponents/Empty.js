import React from 'react';
import maintenance from './maintenance.jpg';

const Empty = () => {
  return (
    <div className='Empty text-center'>
      <div>This feature will be added soon!!!</div>
      <img src={maintenance} alt='Maintenance break' width='500' />
    </div>
  );
};

export default Empty;
