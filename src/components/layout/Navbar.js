import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import AddTweetModal from "./AddTweetModal";
import { nav } from "../data/nav";
import { v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { changeNav } from "../../redux/action/nav";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const onClick = () => {
    props.history.push("/home");
    dispatch(changeNav("Home"));
  };
  const active = useSelector((state) => state.nav.activeNav);
  const close = () => setOpen(false);
  const [default_nav, setDefaultNav] = useState("");

  useEffect(() => {
    switch (props.history.location.pathname) {
      case "/home":
        setDefaultNav("Home");
        break;
      case "/notifications":
        setDefaultNav("Notifications");
        break;
      case "/messages":
        setDefaultNav("Messages");
        break;
      case "/profile":
        setDefaultNav("Profile");
        break;
      case "/more":
        setDefaultNav("More");
        break;
      default:
        setDefaultNav("Home");
        break;
    }
    dispatch(changeNav(default_nav));
  }, [default_nav, dispatch, props.history]);

  return (
    <div className="Navbar">
      <ul className="w-75 mx-auto">
        <li className="logo" onClick={onClick}>
          <i className="fab fa-twitter" id="twitter"></i>
        </li>
        <br />
        {nav.map((item) => {
          let activeClass = "";
          if (active === item.name) activeClass = "active-nav";
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
      <div className="w-75 mx-auto">
        <button
          className="w-100 btn butn p-3 d-none"
          onClick={() => setOpen(true)}
        >
          Tweet
        </button>
      </div>
      <AddTweetModal open={open} close={close} />
    </div>
  );
};

export default withRouter(Navbar);
