const express = require("express");
const connectDB = require("./config/db");

const app = express();
// Connect Database
connectDB();

app.get("/", (req, res) => res.send("api running"));

const port = process.env.Port || 5000;

app.listen(port, () => {});
