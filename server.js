const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
const notFound = require("./middleware/not-found");

const app = express();

// Connect Datebase
connectDB();

// Inint Middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Running");
});

// Define Routes
app.use("/api/users", require("./routes/api/users.js"));
app.use("/api/posts", require("./routes/api/posts.js"));
app.use("/api/profile", require("./routes/api/profile.js"));
app.use("/api/auth", require("./routes/api/auth.js"));

app.use(notFound);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT} -> http://localhost:${PORT}`)
);
