import React, { useState, useEffect } from "react";
import axios from "axios";

import PostItem from "./PostItem";

export default () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        "http://microservices-course-posts.route/posts"
      );
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const renderedPosts = Object.values(posts).map((post) => (
    <PostItem key={post.id} item={post} />
  ));
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
