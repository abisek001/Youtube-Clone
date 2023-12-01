import React, { useState } from "react";
import "./Comments.css";

function DisplayComments({ userName, userComments, _id }) {
  const [comment, setComment] = useState("");
  const [editCommit, seteditCommit] = useState(false);


  const handleEdit = (commentId ) => {
    seteditCommit(true)
  }
  const handleSubmit = (i) => {
    i.preventDefault();
    seteditCommit(false)
  }
  return (
    <div className="display_Comments">
      {editCommit ? (
        <>
          <div className="comment_Field_Continer">
            <form className="comments_Form">
              <input
                type="text"
                placeholder="Edit a comment..."
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
                onClick={() => seteditCommit(false)}
              />
              <input
                type="submit"
                value="Comment"
                className="comment_Button"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="username">{userName}</p>
        </>
      )}
      <p className="userComment"> - {userComments} commented</p>
      <p className="edit_Comment">
        <i onClick={() => handleEdit(_id)}>Edit</i>
        <i>Delete</i>
      </p>
    </div>
  );
}

export default DisplayComments;
