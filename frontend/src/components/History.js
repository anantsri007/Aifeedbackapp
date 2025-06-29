import React, { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("/api/history")
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











// import React, { useEffect, useState } from "react";

// export default function History() {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     fetch("/api/history")
//       .then(res => res.json())
//       .then(data => setHistory(data));
//   }, []);

//   const handleDeleteHistory = async () => {
//     if (!window.confirm("Are you sure you want to delete all submission history?")) return;
//     try {
//       const res = await fetch("/api/history/clear", { method: "DELETE" });
//       if (res.ok) {
//         setHistory([]);
//       } else {
//         alert("Failed to delete submission history.");
//       }
//     } catch (err) {
//       alert("Error deleting submission history.");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-8">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-bold">Submission History</h2>
//         <button
//           onClick={handleDeleteHistory}
//           className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
//         >
//           Delete Submission History
//         </button>
//       </div>
//       <ul>
//         {history.length === 0 ? (
//           <li className="text-gray-500">No submissions yet.</li>
//         ) : (
//           history.map(item => (
//             <li key={item._id} className="mb-2 p-2 bg-gray-50 rounded">
//               <div><b>Input:</b> {item.user_input}</div>
//               <div><b>Feedback:</b> {item.feedback}</div>
//               <div className="text-xs text-gray-500">{new Date(item.timestamp).toLocaleString()}</div>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }
