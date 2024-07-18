// src/index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";

// routes
import usersRoutes from "./routes/users.js";
import storiesRoutes from "./routes/stories.js";
import hashtagsRoutes from "./routes/hashtags.js";
import postsRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

connectDB();

// Apply the authentication middleware to protect routes
app.use("/api", authRoutes);

// routes
app.use(usersRoutes);
app.use(storiesRoutes);
app.use(hashtagsRoutes);
app.use(postsRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
