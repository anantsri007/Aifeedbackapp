
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import feedbackRoutes from "./routes/feedback.js";
// import historyRoutes from "./routes/history.js";

// dotenv.config();

// const app = express();

// // Optionally, restrict CORS to your frontend domain in production
// // const allowedOrigins = ["https://your-frontend.vercel.app"];
// // app.use(cors({ origin: allowedOrigins, credentials: true }));

// app.use(cors());
// app.use(express.json());

// // Root route to confirm server is running
// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// // API routes
// app.use("/api/feedback", feedbackRoutes);
// app.use("/api/history", historyRoutes);

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI)

// // mongoose.connect(process.env.MONGODB_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// .then(() => console.log("MongoDB connected"))
// .catch(err => {
//   console.error("MongoDB connection error:", err);
//   process.exit(1); // Exit the process if DB connection fails
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedback.js";
import historyRoutes from "./routes/history.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/feedback", feedbackRoutes);
app.use("/api/history", historyRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));














