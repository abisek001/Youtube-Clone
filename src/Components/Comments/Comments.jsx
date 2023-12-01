import React, { useState } from "react";
import "./Comments.css";
import DisplayComments from "./DisplayComments";

function Comments() {
  const [comment, setComment] = useState("");

  const CommentList = [
    {
      _id: "1",
      userName: "Abisek",
      userComments: "Awesome",
    },
    {
      _id: "2",
      userName: "Srikanth",
      userComments: "Good",
    },
  ];

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
            onChange={(e) => setComment(e.target.value)}
          />
        </form>
        <div className="buttons_Container">
          <input
            type="button"
            value="Cancel"
            className="cancel_Button"
            onClick={() => setComment("")}
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
        {CommentList.map((comment) => {
          return (
            <DisplayComments
              _id={comment._id}
              userComments={comment.userComments}
              userName={comment.userName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
