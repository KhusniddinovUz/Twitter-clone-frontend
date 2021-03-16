import React from 'react';
import maintenance from './maintenance.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Empty = () => {
  return (
    <div className='Empty text-center'>
      <div>This feature will be added soon!!!</div>
      <LazyLoadImage
        effect='blur'
        src={maintenance}
        alt='Maintenance break'
        width='400'
      />
    </div>
  );
};

export default Empty;
