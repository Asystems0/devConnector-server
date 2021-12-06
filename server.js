const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");

const app = express();

// Connect Datebase
connectDB();

// Inint Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running");
});

// Define Routes
app.use("/api/users", require("./routes/api/users.js"));
app.use("/api/posts", require("./routes/api/posts.js"));
app.use("/api/profile", require("./routes/api/profile.js"));
app.use("/api/auth", require("./routes/api/auth.js"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT} -> http://localhost:${PORT}`)
);
