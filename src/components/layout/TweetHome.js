import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTweet } from "../../redux/action/tweet";

const TweetHome = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTweet({ text }));
    setText("");
  };
  return (
    <div className="TweetHome">
      <div>Home</div>
      <form className="p-3" onSubmit={onSubmit}>
        <div className="d-flex justify-content-center">
          <img
            src={`https://ui-avatars.com/api/?name=${auth.username}`}
            className="profile-image"
            alt="profile"
          />
          <textarea
            type="text"
            placeholder="What's happening?"
            onChange={onChange}
            value={text}
          />
        </div>
        <button type="submit" className="btn butn mx-auto">
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetHome;
