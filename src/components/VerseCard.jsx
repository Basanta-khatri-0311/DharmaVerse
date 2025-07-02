import React from "react";
import verses from "../Data/Verses";

const VerseCard = () => {
  return (
    <section className="grid gap-6">
      {verses.length === 0 ? (
        <p className="text-center text-yellow-800 dark:text-yellow-200">
          No verses found.
        </p>
      ) : (
        verses.map((verse) => (
          <div
            key={verse.id}
            className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-xl shadow-md transition-all"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold font-serif text-yellow-900 dark:text-yellow-100">
                📜 {verse.title}
              </span>
              <button className="text-xl text-yellow-900 dark:text-yellow-100 hover:text-red-500 transition-colors">
                {verse.isFavorite ? <i className="ri-heart-3-fill"></i> : <i className="ri-heart-3-line"></i> }
                
              </button>
            </div>

            {/* Verse Content */}
            <div className="flex flex-col gap-2">
              <span className="text-lg font-medium italic text-yellow-900 dark:text-yellow-200">
                {verse.sanskrit}
              </span>
              <span className="text-base text-yellow-800 dark:text-yellow-300">
                {verse.english}
              </span>
              <span className="text-sm mt-2 text-yellow-700 dark:text-yellow-400">
                🧘 {verse.tag}
              </span>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default VerseCard;
