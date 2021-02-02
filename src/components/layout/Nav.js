import React from 'react';
import { useDispatch } from 'react-redux';
import { changeNav } from '../../action/nav';

const Nav = ({ props, iconClass, name, activeClass }) => {
  const dispatch = useDispatch();
  const className = 'd-flex align-items-center list-group-item';
  const onClick = (e) => {
    dispatch(changeNav(name));
    if (e.target.tagName === 'LI') {
      Array.from(document.getElementsByClassName('list-group-item')).forEach(
        (el) => (el.className = className)
      );
      if (name === 'Home') {
        props.history.push(`/${name.toLowerCase()}`);
      } else {
        props.history.push(`/home/${name.toLowerCase()}`);
      }
    } else if (e.target.parentElement.tagName === 'LI') {
      Array.from(document.getElementsByClassName('list-group-item')).forEach(
        (el) => (el.className = className)
      );
      if (name === 'Home') {
        props.history.push(`/${name.toLowerCase()}`);
      } else {
        props.history.push(`/home/${name.toLowerCase()}`);
      }
    }
  };

  return (
    <li
      onClick={onClick}
      className={`d-flex align-items-center list-group-item ${activeClass}`}
    >
      <i className={iconClass} />
      <span>{name}</span>
    </li>
  );
};

export default Nav;
