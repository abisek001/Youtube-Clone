import React from "react";
import "./Comments.css";

function Comments() {
  return (
    <div className="comments_Container">
      <form className="comments_Form">
        <input
          type="text"
          placeholder="Add a comment..."
          className="comments_Input"
        />
      </form>
      <div className="buttons_Container">
        <input type="button" value="Cancel" className="cancel_Button" />
        <input type="submit" value="Comment" className="comment_Button" />
      </div>
    </div>
  );
}

export default Comments;
