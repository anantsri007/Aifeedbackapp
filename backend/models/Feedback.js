import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  user_input: { type: String, required: true },
  feedback: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);
export default Feedback;
