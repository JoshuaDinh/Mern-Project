const express = require("express");
const connectDB = require("./config/db");

const app = express();
// Connect Database
connectDB();

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));

app.get("/", (req, res) => res.send("api running"));

const port = process.env.Port || 5000;

app.listen(port, () => {});
