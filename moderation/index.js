const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log(`Received event: ${type}`);

  if (type === "CommentCreated") {
    const { content } = data;
    const status = content.includes("orange") ? "rejected" : "approved";
    await axios.post("http://microservices-course-event-bus-srv:4005/events", {
      type: "CommentModerated",
      data: {
        ...data,
        status,
      },
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
