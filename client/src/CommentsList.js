import React from "react";

export default ({ comments }) => {
  const commentsElements = comments.map((comment) => {
    let commentContent = "";
    switch (comment.status) {
      case "pending": {
        commentContent = "The comment is waiting for review";
        break;
      }
      case "rejected": {
        commentContent = "The comment is rejected";
        break;
      }
      default: {
        commentContent = comment.content;
        break;
      }
    }
    return <li key={comment.id}>{commentContent}</li>;
  });

  return <ul>{commentsElements}</ul>;
};
