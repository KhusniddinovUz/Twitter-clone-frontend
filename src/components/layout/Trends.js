import React, { useEffect } from "react";
import {
  getLastUsers,
  searchUsers,
  clearSearchUser,
} from "../../redux/action/users";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import FoundUsers from "./FoundUsers";

const Trends = () => {
  const users = useSelector((state) => state.users.lastusers);
  const foundusers = useSelector((state) => state.users.foundusers);
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    if (e.target.value.replace(/ /g, "") !== "")
      dispatch(searchUsers(e.target.value));
    else {
      dispatch(clearSearchUser());
    }
  };

  useEffect(() => {
    dispatch(getLastUsers());
  }, [dispatch]);
  return (
    <div className="Trends text-center">
      <input
        type="search"
        className="w-75 mt-3"
        onChange={searchHandler}
        placeholder="Search users"
      />
      {foundusers.length > 0 && <FoundUsers />}
      <div className="mx-auto mt-4">Trends for you</div>
      <div className="mx-auto mt-4" id="lastusers">
        <span>New Users</span>
        {users &&
          users.map((user) => {
            return <div key={v4()}>@{user.username}</div>;
          })}
      </div>
    </div>
  );
};

export default Trends;
