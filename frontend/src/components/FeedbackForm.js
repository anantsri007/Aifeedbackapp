import React, { useState } from "react";
import axios from "axios";

export default function FeedbackForm() {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);


  const API_URL = "https://aifeedbackapp-19.onrender.com";
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");
    try {
      const res = await axios.post(`${API_URL}/api/feedback`, { user_input: input });
      setFeedback(res.data.feedback);
    } catch (err) {
      setFeedback("Error getting feedback.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700">
      <div className="w-full max-w-xl rounded-2xl shadow-2xl bg-white/30 backdrop-blur-lg border border-white/40 p-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-white text-center mb-4 drop-shadow-lg tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400">
            AI Feedback App
          </span>
        </h1>
        <p className="text-white text-center mb-8 opacity-90 font-medium">
          Get instant, AI-powered feedback on your responses.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <textarea
            className="w-full rounded-xl p-4 bg-white/80 focus:bg-white/90 border-2 border-indigo-300 focus:border-blue-500 outline-none resize-none text-lg shadow transition"
            rows={5}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your response here..."
            required
          />
          <button
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-lg font-bold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 active:scale-95"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Loading...
              </span>
            ) : "Get Feedback"}
          </button>
        </form>
        {feedback && (
          <div className="mt-10 p-6 rounded-xl bg-white/80 shadow-xl border border-indigo-200 animate-fade-in-up">
            <span className="font-bold text-indigo-700 text-lg">AI Feedback:</span>
            <p className="mt-2 text-gray-800 text-base">{feedback}</p>
          </div>
        )}
      </div>
      {/* Animations */}
      <style>
        {`
        .animate-fade-in {
          animation: fade-in 1s ease;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(.39,.575,.565,1.000);
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.98);}
          to { opacity: 1; transform: scale(1);}
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        `}
      </style>
    </div>
  );
}
