// import express from "express";
// import Feedback from "../models/Feedback.js";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();

// // Initialize Gemini
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// router.post("/", async (req, res) => {
//   const { user_input } = req.body;
//   if (!user_input) return res.status(400).json({ error: "user_input required" });

//   try {
//     // Generate feedback using Gemini
//     const result = await model.generateContent({
//       contents: [{ parts: [{ text: user_input }] }]
//     });
//     const feedback = result.response.text();

//     // Save to MongoDB
//     await Feedback.create({ user_input, feedback });
//     res.json({ feedback });
//   } catch (error) {
//     console.error("Gemini API error:", error);
//     res.status(500).json({ error: "Failed to get feedback from Gemini" });
//   }
// });

// export default router;









// import express from "express";
// import Feedback from "../models/Feedback.js";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();

// // Initialize Gemini with the latest model name
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// // Use the latest available model: "gemini-2.0-flash" or "gemini-2.0-pro"
// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// router.post("/", async (req, res) => {
//   const { user_input } = req.body;
//   if (!user_input) return res.status(400).json({ error: "user_input required" });

//   try {
//     // Generate feedback using Gemini
//     const result = await model.generateContent({
//       contents: [{ parts: [{ text: user_input }] }]
//     });
//     const feedback = result.response.text();

//     // Save to MongoDB
//     await Feedback.create({ user_input, feedback });
//     res.json({ feedback });
//   } catch (error) {
//     console.error("Gemini API error:", error);
//     // Log more details if available
//     if (error.response) {
//       console.error("Gemini API error response data:", error.response.data);
//     }
//     res.status(500).json({ error: "Failed to get feedback from Gemini" });
//   }
// });

// export default router;








import express from "express";
import Feedback from "../models/Feedback.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

// Directly use your API key here
const genAI = new GoogleGenerativeAI("AIzaSyBoI-KIbYxbThZL9-2q8nqmXnzdTcnzozo");
// Use the latest available model: "gemini-2.0-flash" or "gemini-2.0-pro"
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

router.post("/", async (req, res) => {
  const { user_input } = req.body;
  if (!user_input) return res.status(400).json({ error: "user_input required" });

  try {
    // Generate feedback using Gemini
    const result = await model.generateContent({
      contents: [{ parts: [{ text: user_input }] }]
    });
    const feedback = result.response.text();

    // Save to MongoDB
    await Feedback.create({ user_input, feedback });
    res.json({ feedback });
  } catch (error) {
    console.error("Gemini API error:", error);
    if (error.response) {
      console.error("Gemini API error response data:", error.response.data);
    }
    res.status(500).json({ error: "Failed to get feedback from Gemini" });
  }
});

export default router;
