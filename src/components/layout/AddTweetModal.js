import React, { useRef } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addTweet } from "../../redux/action/tweet";

const AddTweetModal = ({ open, close }) => {
  const text = useRef("");
  const dispatch = useDispatch();
  const style = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      background: "#fff",
      border: "1px solid #ebeef0",
      borderRadius: "15px",
      padding: "20px",
      outline: "none",
      overflow: "none",
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTweet({ text: text.current.value }));
    close();
  };

  return (
    <Modal
      isOpen={open}
      style={style}
      className="AddTweetModal position-relative"
    >
      <h2 className="mb-3">Create a brend new Tweet</h2>
      <form className="form-group width-200" onSubmit={onSubmit}>
        <textarea
          rows={10}
          type="text"
          className="form-control"
          ref={text}
          style={{ resize: "none" }}
        />
        <button className="butn btn mt-3" type="submit">
          Add Tweet
        </button>
        <i
          onClick={() => close()}
          type="button"
          className="far fa-times-circle position-absolute"
          style={{
            top: "10px",
            right: "10px",
            fontSize: "30px",
            color: "#228cf5",
          }}
        />
      </form>
    </Modal>
  );
};

export default AddTweetModal;
