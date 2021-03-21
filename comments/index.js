const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const postId = req.params.id;
  res.send(commentsByPostId[postId] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const postId = req.params.id;
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[postId] || [];
  const newComment = {
    id: commentId,
    content,
    postId,
    status: "pending",
  };
  comments.push(newComment);
  commentsByPostId[postId] = comments;

  await axios.post("http://microservices-course-event-bus-srv:4005/events", {
    type: "CommentCreated",
    data: newComment,
  });

  res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log("Received event", type);

  if (type === "CommentModerated") {
    const { id, postId, status } = data;
    commentsByPostId[postId] = commentsByPostId[postId].map((comment) => {
      if (comment.id === id) {
        return data;
      }
      return comment;
    });
    await axios.post("http://microservices-course-event-bus-srv:4005/events", {
      type: "CommentUpdated",
      data,
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001, v0.0.3");
});
