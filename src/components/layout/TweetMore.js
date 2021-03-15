import React from 'react';

const TweetMore = () => {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <div onClick={onClick} className='TweetMore'>
      <div className='dropdown'>
        <i
          className='btn btn-secondary far fa-ellipsis-v'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        ></i>
        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
          <span className='dropdown-item' href='#'>
            Action
          </span>
        </div>
      </div>
    </div>
  );
};

export default TweetMore;
