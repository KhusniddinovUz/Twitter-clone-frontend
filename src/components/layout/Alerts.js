import React from "react";
import { withAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_ERROR } from "../../redux/action/types";

const Alerts = (props) => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.errors.msg);
  const { alert } = props;

  if (msg.username) {
    alert.error(`Username: ${String(msg.username)}`);
    dispatch({ type: REMOVE_ERROR });
  }
  if (msg.password) {
    alert.error(`Password: ${String(msg.password)}`);
    dispatch({ type: REMOVE_ERROR });
  }
  if (msg.non_field_errors) {
    alert.error(`${String(msg.non_field_errors)}`);
    dispatch({ type: REMOVE_ERROR });
  }
  if (msg.text) {
    alert.error(`${String(msg.text)}`);
    dispatch({ type: REMOVE_ERROR });
  }
  if (msg.tweetAdded) {
    alert.success(`${msg.tweetAdded}`);
    dispatch({ type: REMOVE_ERROR });
  }
  if (msg.deletedTweet) {
    alert.success(`${msg.deletedTweet}`);
    dispatch({ type: REMOVE_ERROR });
  }
  if (msg.body) {
    alert.error(`Body: ${String(msg.body)}`);
    dispatch({ type: REMOVE_ERROR });
  }
  if (msg.tweet_link_copied) {
    alert.success(`${msg.tweet_link_copied}`);
    dispatch({ type: REMOVE_ERROR });
  }

  return <div></div>;
};

export default withAlert()(Alerts);
