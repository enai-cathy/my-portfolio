'use client';

import React, { useState } from "react";

const ResumePage: React.FC = () => {
  const [view, setView] = useState<'summary' | 'full' | null>(null);

  const summaryUrl = "/enaikato Ige-Edaba FrontEnd Developer-1page cv.pdf"; // replace with your summary PDF
  const fullUrl = "/Enaikato Ige-Edaba Frontend and UI developer.pdf"; // replace with your full PDF

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Resume</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView('summary')}
          className="px-6 py-2 border border-black hover:text-white rounded-md hover:bg-black transition"
        >
          View Summary
        </button>
        <button
          onClick={() => setView('full')}
          className="px-6 py-2 bg-black border border-gray-100 text-white rounded-md hover:bg-black/80  hover:border-gray-900 transition"
        >
          View Full Resume
        </button>
      </div>

      {view && (
        <iframe
          src={view === 'summary' ? summaryUrl : fullUrl}
          className="w-full max-w-4xl h-[600px] border border-gray-300 rounded-md shadow-lg"
          title="Resume Viewer"
        />
      )}

      {!view && (
        <p className="text-gray-600 mt-4 text-center">
          Click a button above to view my resume.
        </p>
      )}
    </div>
  );
};

export default ResumePage;
