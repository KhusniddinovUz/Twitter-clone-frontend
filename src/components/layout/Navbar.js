import React, { useState } from 'react';
import Nav from './Nav';
import { nav } from '../data/nav';
import { v4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { changeNav } from '../../action/nav';
import AddTweetModal from './AddTweetModal';

const Navbar = ({ props }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const onClick = () => {
    props.history.push('/home');
    dispatch(changeNav('Home'));
  };
  const active = useSelector((state) => state.nav.activeNav);
  const close = () => setOpen(false);
  return (
    <div className='Navbar'>
      <ul className='w-75 mx-auto'>
        <li className='logo' onClick={onClick}>
          <i className='fab fa-twitter' id='twitter'></i>
        </li>
        <br />
        {nav.map((item) => {
          let activeClass = '';
          if (active === item.name) activeClass = 'active-nav';
          return (
            <Nav
              key={v4()}
              iconClass={item.iconClass}
              name={item.name}
              props={props}
              activeClass={activeClass}
            />
          );
        })}
      </ul>
      <div className='w-75 mx-auto'>
        <button
          className='w-100 btn butn p-3 d-none'
          onClick={() => setOpen(true)}
        >
          Tweet
        </button>
      </div>
      <AddTweetModal open={open} close={close} />
    </div>
  );
};

export default Navbar;
