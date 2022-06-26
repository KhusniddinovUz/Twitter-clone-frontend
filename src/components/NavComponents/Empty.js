import React, { useState } from 'react';
import maintenance from './maintenance.png';

const Empty = () => {
  const [imageLoaded, setImageLoader] = useState(false);
  const roller = (
    <div>
      <svg
        style={{
          margin: 'auto',
          background: 'none',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width='100px'
        height='100px'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <circle
          cx='50'
          cy='50'
          fill='none'
          stroke='#228cf5'
          strokeWidth='10'
          r='35'
          strokeDasharray='164.93361431346415 56.97787143782138'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            repeatCount='indefinite'
            dur='1s'
            values='0 50 50;360 50 50'
            keyTimes='0;1'
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
  const loadHandler = () => {
    setImageLoader(true);
  };
  return (
    <div className='Empty text-center'>
      <div>This feature will be added soon!!!</div>
      {!imageLoaded && roller}
      <img
        effect='blur'
        src={maintenance}
        alt='Maintenance break'
        width='400'
        onLoad={loadHandler}
      />
    </div>
  );
};

export default Empty;
