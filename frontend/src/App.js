// import React from "react";
// import FeedbackForm from "./components/FeedbackForm";
// import History from "./components/History"; // Optional

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-200">
//       <h1 className="text-3xl font-bold text-center pt-8">AI Feedback App</h1>
//       <FeedbackForm />
//       <History /> {/* Optional: Remove if not using history */}
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import History from "./components/History";

function App() {
  const [history, setHistory] = useState([]);

  return (
    <Router>
      <nav>
        <Link to="/">Feedback</Link> | <Link to="/history">Submission History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FeedbackForm history={history} setHistory={setHistory} />} />
        <Route path="/history" element={<History history={history} />} />
      </Routes>
    </Router>
  );
}

export default App;
