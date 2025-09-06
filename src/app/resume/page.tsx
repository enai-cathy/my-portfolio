// "use client";

// import React, { useState } from "react";

// const ResumePage: React.FC = () => {
//   const [view, setView] = useState<"summary" | "full" | null>(null);

//   const summaryUrl = "/enaikato Ige-Edaba FrontEnd Developer-1page cv.pdf"; // summary PDF
//   const fullUrl = "/Enaikato Ige-Edaba Frontend and UI developer.pdf"; // full PDF

//   const currentUrl = view === "summary" ? summaryUrl : fullUrl;

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-start text-gray-600 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">My Resume</h1>

//       {/* Toggle Buttons */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         <button
//           onClick={() => setView("summary")}
//           className="px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition"
//         >
//           View Summary
//         </button>
//         <button
//           onClick={() => setView("full")}
//           className="px-6 py-2 bg-black border border-gray-100 text-white rounded-md hover:bg-black/80 transition"
//         >
//           View Full Resume
//         </button>
//       </div>

//       {/* PDF Viewer */}
//       {view ? (
//         <div className="w-full max-w-4xl flex flex-col items-center">
//           <div className="w-full h-[75vh] sm:h-[85vh]">
//             <iframe
//               src={currentUrl}
//               className="w-full h-full border border-gray-300 rounded-md shadow-lg"
//               title="Resume Viewer"
//             />
//           </div>

//           {/* Fallback download/open button */}
//           <a
//             href={currentUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-4 inline-block px-6 py-2 border border-gray-900 rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition"
//           >
//             Open in New Tab / Download
//           </a>
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

import React, { useState } from "react";

const ResumePage: React.FC = () => {
  const [view, setView] = useState<"summary" | "full" | null>(null);

  const summaryUrl = "/resume-summary.pdf"; // rename to avoid spaces
  const fullUrl = "/resume-full.pdf";       // rename to avoid spaces

  const currentUrl = view === "summary" ? summaryUrl : fullUrl;

  return (
    <div className="min-h-screen flex flex-col items-center text-gray-700 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Resume</h1>

      {/* Toggle Buttons */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <button
          onClick={() => setView("summary")}
          className={`px-6 py-2 border rounded-md transition ${
            view === "summary"
              ? "bg-black text-white border-black"
              : "border-black hover:bg-black hover:text-white"
          }`}
        >
          View Summary
        </button>
        <button
          onClick={() => setView("full")}
          className={`px-6 py-2 border rounded-md transition ${
            view === "full"
              ? "bg-black text-white border-black"
              : "border-black hover:bg-black hover:text-white"
          }`}
        >
          View Full Resume
        </button>
      </div>

      {/* PDF Viewer */}
      {view ? (
        <div className="w-full max-w-4xl flex flex-col items-center">
          {/* Responsive iframe */}
          <div className="w-full h-[70vh] sm:h-[85vh]">
            <iframe
              src={currentUrl}
              className="w-full h-full border border-gray-300 rounded-md shadow-lg"
              title="Resume Viewer"
            />
          </div>

          {/* Fallback buttons */}
          <div className="mt-4 flex gap-4">
            <a
              href={currentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gray-900 rounded-full text-sm hover:bg-black hover:text-white transition"
            >
              Open in New Tab
            </a>
            <a
              href={currentUrl}
              download
              className="px-6 py-2 border border-gray-900 rounded-full text-sm hover:bg-black hover:text-white transition"
            >
              Download PDF
            </a>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 mt-4 text-center">
          Click a button above to view my resume.
        </p>
      )}
    </div>
  );
};

export default ResumePage;
