const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts/create", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  const targetPost = {
    id,
    title,
  };
  posts[id] = targetPost;

  await axios.post("http://microservices-course-event-bus-srv:4005/events", {
    type: "PostCreated",
    data: targetPost,
  });

  res.status(201).send(targetPost);
});

app.post("/events", (req, res) => {
  const event = req.body;
  console.log("Received event", event.type);
  res.send({});
});

app.listen(4000, () => {
  console.log("v0.0.7");
  console.log("Listening on 4000");
});
