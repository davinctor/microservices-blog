const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

const handlePostCreated = ({ id, title }) => {
  posts[id] = {
    id,
    title,
    comments: [],
  };
};

const handleCommentCreated = (data) => {
  const { postId } = data;
  posts[postId].comments.push(data);
};

const handleCommentUpdated = (data) => {
  const { id, postId } = data;
  posts[postId].comments = posts[postId].comments.map((comment) => {
    if (comment.id === id) {
      return data;
    }
    return comment;
  });
};

const handleEvent = (type, data) => {
  switch (type) {
    case "PostCreated": {
      handlePostCreated(data);
      break;
    }
    case "CommentCreated": {
      handleCommentCreated(data);
      break;
    }
    case "CommentUpdated": {
      handleCommentUpdated(data);
      break;
    }
    default:
  }
};

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  console.log(`Received event: ${type}, ${JSON.stringify(data)}`);
  handleEvent(type, data);
  res.send({});
});

app.listen(4002, async () => {
  console.log("Listening on 4002");
  const res = await axios.get(
    "http://microservices-course-event-bus-srv:4005/events"
  );
  for (const event of res.data) {
    handleEvent(event.type, event.data);
  }
});
