import React from 'react';
import image404 from './404.png';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='Empty text-center'>
      <img src={image404} width='400' alt='Not Found' />
      <br />
      <button className='btn btn-primary butn'>
        <NavLink to='/home'>Back Home</NavLink>
      </button>
    </div>
  );
};

export default NotFound;
