import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [title, setTitle] = useState("");
  const onSubmit = async () => {
    await axios.post("http://microservices-course-posts.route/posts/create", {
      title,
    });
    setTitle("");
  };
  return (
    <form className="form">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="New post"
          aria-label="New post"
          aria-describedby="button-new-post"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-new-post"
            onClick={onSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};
