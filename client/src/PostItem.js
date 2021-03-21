import React from "react";

import CommentCreate from "./CommentCreate";
import CommentsList from "./CommentsList";

export default ({ item }) => (
  <div className="card" style={{ width: "30%", marginBottom: "20px" }}>
    <div className="card-body">
      <h3>{item.title}</h3>
      <CommentsList comments={item.comments} />
      <CommentCreate postId={item.id} />
    </div>
  </div>
);
