import React from 'react';
import { useSelector } from 'react-redux';

const TweetMore = (props) => {
  const owner = useSelector((state) => state.auth.id);
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <div onClick={onClick} className='TweetMore'>
      <div className='dropleft'>
        <i
          className='btn btn-secondary far fa-ellipsis-v'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        ></i>
        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
          <span className='dropdown-item'>Action</span>
          {owner === props.owner && (
            <span onClick={props.delete} className='dropdown-item'>
              Delete
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TweetMore;
