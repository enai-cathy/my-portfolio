
// "use client";

// import React, { useState } from "react";

// const ResumePage: React.FC = () => {
//   const [view, setView] = useState<"summary" | "full" | null>(null);

//   const summaryUrl = "/resume-summary.pdf"; // rename to avoid spaces
//   const fullUrl = "/resume-full.pdf";       // rename to avoid spaces

//   const currentUrl = view === "summary" ? summaryUrl : fullUrl;

//   return (
//     <div className="min-h-screen flex flex-col items-center text-gray-700 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">My Resume</h1>

//       {/* Toggle Buttons */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         <button
//           onClick={() => setView("summary")}
//           className={`px-6 py-2 border rounded-md transition ${
//             view === "summary"
//               ? "bg-black text-white border-black"
//               : "border-black hover:bg-black hover:text-white"
//           }`}
//         >
//           View Summary
//         </button>
//         <button
//           onClick={() => setView("full")}
//           className={`px-6 py-2 border rounded-md transition ${
//             view === "full"
//               ? "bg-black text-white border-black"
//               : "border-black hover:bg-black hover:text-white"
//           }`}
//         >
//           View Full Resume
//         </button>
//       </div>

//       {/* PDF Viewer */}
//       {view ? (
//         <div className="w-full max-w-4xl flex flex-col items-center">
//           {/* Responsive iframe */}
//           <div className="w-full h-[70vh] sm:h-[85vh]">
//             <iframe
//               src={currentUrl}
//               className="w-full h-full border border-gray-300 rounded-md shadow-lg"
//               title="Resume Viewer"
//             />
//           </div>

//           {/* Fallback buttons */}
//           <div className="mt-4 flex gap-4">
//             <a
//               href={currentUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 border border-gray-900 rounded-full text-sm hover:bg-black hover:text-white transition"
//             >
//               Open in New Tab
//             </a>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-600 mt-4 text-center">
//           Click a button above to view my resume.
//         </p>
//       )}
//     </div>
//   );
// };

// export default ResumePage;


"use client";

import React from "react";

const ResumePage: React.FC = () => {
  const summaryUrl = "/resume-summary.pdf"; // rename to avoid spaces
  const fullUrl = "/resume-full.pdf";

  return (
    <div className="min-h-screen flex flex-col items-center text-gray-700 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Resume</h1>

      {/* Buttons that auto open in new tab */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href={summaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          View Summary
        </a>
        <a
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-black text-white border border-black rounded-full hover:bg-black/80 transition"
        >
          View Full Resume
        </a>
      </div>

      <p className="text-gray-600 mt-6 text-center">
 click a button above to view my resume.
      </p>
    </div>
  );
};

export default ResumePage;
