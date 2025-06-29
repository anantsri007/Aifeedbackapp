import React, { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);


   const API_URL = "https://aifeedbackapp-19.onrender.com";

  useEffect(() => {
    fetch(`${API_URL}/api/history`)
      .then(res => res.json())
      .then(data => setHistory(data));
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-bold mb-2">Submission History</h2>
      <ul>
        {history.map(item => (
          <li key={item._id} className="mb-2 p-2 bg-gray-50 rounded">
            <div><b>Input:</b> {item.user_input}</div>
            <div><b>Feedback:</b> {item.feedback}</div>
            <div className="text-xs text-gray-500">{new Date(item.timestamp).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}








