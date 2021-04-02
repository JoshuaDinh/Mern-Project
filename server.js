const express = require("express");
const app = express();

const port = process.env.Port || 5000;

app.get("/", (req, res) => res.send("api running"));

app.listen(port, () => {
  console.log("server connected on" + port);
});
