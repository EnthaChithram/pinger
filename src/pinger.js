const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

app.listen(2000, () => {
  console.log("listening to ", 2000);
});

app.get("/alive", async (req, res) => {
  console.log("alive signal recieved");
  res.send("okay");
});

const interval = setInterval(() => {
  console.log("started");
  fetch("http://localhost:3000/ping").then((data) => {
    data.json().then((res) => {
      console.log(res);
    });
  });
}, 10000);
