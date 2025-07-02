import React from "react";
import verses from "../Data/Verses"; 

const TodaysThought = () => {
    
  const hourIndex = new Date().getHours() % verses.length;
  const thought = verses[hourIndex];

  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-4xl font-bold font-serif mb-4">
        🪔 Today's Thought
      </h2>

      {thought ? (
        <div className="bg-yellow-200 dark:bg-yellow-700 p-6 rounded-lg shadow-md transition-all">
          <p className="text-lg italic leading-relaxed text-yellow-900 dark:text-yellow-100 mb-2">
            {thought.sanskrit}
          </p>
          <p className="text-lg italic leading-relaxed text-yellow-900 dark:text-yellow-100 mb-2">
            {thought.english}
          </p>
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            - {thought.title}
          </p>
        </div>
      ) : (
        <div className="text-yellow-700 dark:text-yellow-200">
          No thought available today.
        </div>
      )}
    </section>
  );
};

export default TodaysThought;
