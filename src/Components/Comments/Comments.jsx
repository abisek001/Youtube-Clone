import React, { useState } from "react";
import "./Comments.css";
import DisplayComments from "./DisplayComments";

function Comments() {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCancel = () => {
    setComment("");
  };

  const handleSubmmit = (i) => {
    i.preventDefault();
    setComment("");
  };

  return (
    <div className="comments_Container">
      <div className="comment_Field_Continer">
        <form className="comments_Form">
          <input
            type="text"
            placeholder="Add a comment..."
            className="comments_Input"
            value={comment}
            onChange={handleCommentChange}
          />
        </form>
        <div className="buttons_Container">
          <input
            type="button"
            value="Cancel"
            className="cancel_Button"
            onClick={handleCancel}
          />
          <input
            type="submit"
            value="Comment"
            className="comment_Button"
            onClick={handleSubmmit}
          />
        </div>
      </div>
      <div className="display_Comments_Container">
        <DisplayComments/>
      </div>
    </div>
  );
}

export default Comments;
