const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.get("/events", (req, res) => {
  res.send(events);
});

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios
    .post("http://microservices-course-posts-srv:4000/events", event)
    .catch((err) => console.log(err));
  axios
    .post("http://microservices-course-comments-srv:4001/events", event)
    .catch((err) => console.log(err));
  axios
    .post("http://microservices-course-query-service-srv:4002/events", event)
    .catch((err) => console.log(err));
  axios
    .post("http://microservices-course-moderation-srv:4003/events", event)
    .catch((err) => console.log(err));

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005, v0.0.9");
});
