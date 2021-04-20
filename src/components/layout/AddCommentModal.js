import React, { useRef } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/action/comments";

const AddCommentModal = ({ open, close, tweet }) => {
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
      padding: "10px 20px 20px 20px",
      outline: "none",
      overflow: "none",
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ body: text.current.value, tweet }));
    close();
  };

  return (
    <Modal
      isOpen={open}
      style={style}
      className="AddCommentModal position-relative"
    >
      <div
        className="position-relative"
        style={{ height: "35px", borderBottom: "1px solid #ccc" }}
      >
        <i
          onClick={() => close()}
          type="button"
          className="far fa-times-circle position-absolute"
          style={{
            top: "0",
            left: "0",
            fontSize: "30px",
            color: "#228cf5",
          }}
        />
      </div>
      <h2 className="mb-3">Comment on this tweet</h2>
      <form className="form-group width-200" onSubmit={onSubmit}>
        <textarea
          rows={5}
          type="text"
          className="form-control"
          ref={text}
          style={{ resize: "none" }}
        />
        <button className="butn btn mt-3" type="submit">
          Comment
        </button>
      </form>
    </Modal>
  );
};

export default AddCommentModal;
