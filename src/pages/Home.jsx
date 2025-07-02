import React from "react";
import VerseCard from "../components/VerseCard";

const Home = () => {
  const filterValues = ["Karma", "Bhakti", "Moksha", "Self Discipline"];

  return (
    <div className="px-8 md:px-16 py-10 max-w-full mx-auto text-yellow-700">
      {/* Thought of the Day */}
      <section className="mb-10">
        <h2 className="text-xl md:text-4xl font-bold font-serif mb-4 ">
          🪔 Today's Thought
        </h2>
        <div className="bg-yellow-200 dark:bg-yellow-700 p-6 rounded-lg shadow-md transition-all">
          <p className="text-lg italic leading-relaxed text-yellow-900 dark:text-yellow-100">
            "The mind is everything. What you think, you become." – Buddha
          </p>
        </div>
      </section>

      {/* Search and Filter Header */}
      <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <span className="text-lg font-medium ">
          🧘 Filter by category:
        </span>
        <input
          type="search"
          placeholder="Search wisdom..."
          className="px-4 py-2 rounded-md border border-yellow-400 bg-yellow-50 dark:bg-yellow-900 dark:border-yellow-600 dark:placeholder-yellow-300 text-yellow-900 dark:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full md:w-1/3"
        />
      </section>

      {/* Filter Buttons */}
      <section className="flex flex-wrap gap-4 mb-10">
        {filterValues.map((category) => (
          <button
            key={category}
            className="px-5 py-2 rounded-full border border-yellow-600 bg-yellow-300 dark:bg-yellow-800 hover:bg-yellow-400 dark:hover:bg-yellow-700 text-sm font-medium text-yellow-900 dark:text-yellow-100 transition-colors"
          >
            {category}
          </button>
        ))}
      </section>

      {/* Verse Card Section */}
      <VerseCard/>
    </div>
  );
};

export default Home;
