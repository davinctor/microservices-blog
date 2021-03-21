import React, { useState } from "react";
import axios from "axios";

export default ({ postId }) => {
  const [content, setContent] = useState("");
  const newComment = async () => {
    try {
      await axios.post(
        `http://microservices-course-posts.route/posts/${postId}/comments`,
        {
          content,
        }
      );
      setContent("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form className="form">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="New comment"
            aria-label="New comment"
            aria-describedby="button-new-comment"
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-new-comment"
              onClick={newComment}
            >
              Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
