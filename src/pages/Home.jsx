import React, { useReducer, useState, useEffect } from "react";
import VerseCard from "../components/VerseCard";
import { verseReducer, initialState } from "../reducer/VerseReducer";
import verses from "../Data/Verses";
import TodaysThought from "../components/TodaysThought";

const LOCAL_STORAGE_KEY = "dharmaverse_verses";

const Home = () => {
  const filterValues = ["All", "Karma", "Bhakti", "Moksha", "Self Discipline"];

  const [initialVerse, setInitialVerses] = useState(() => {
    const storedVerses = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedVerses ? JSON.parse(storedVerses) : verses;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialVerse));
  }, [initialVerse]);

  const [state, dispatch] = useReducer(verseReducer, initialState);

  const filteredVerses = initialVerse.filter((verse) => {
    const matchedSearch =
      verse.english.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      verse.sanskrit.includes(state.searchQuery) ||
      verse.chapter.toLowerCase().includes(state.searchQuery) ||
      verse.chapter.toLowerCase().startsWith(state.searchQuery);

    const matchesCategory =
      state.category === "All" || verse.category === state.category;
    return matchedSearch && matchesCategory;
  });

  const toggleFavorite = (id) => {
    setInitialVerses((prevVerses) =>
      prevVerses.map((verse) =>
        verse.id === id ? { ...verse, isFavorite: !verse.isFavorite } : verse
      )
    );
  };
  return (
    <div className="px-8 md:px-16 py-10 max-w-full mx-auto text-yellow-700">
      {/* Thought of the Day */}
      <TodaysThought />

      {/* Search and Filter Header */}
      <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <span className="text-lg font-medium ">🧘 Filter by category:</span>
        <input
          type="search"
          placeholder="Search wisdom..."
          value={state.searchQuery}
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH", payload: e.target.value })
          }
          className="px-4 py-2 rounded-md border border-yellow-400 bg-yellow-50 dark:bg-yellow-900 dark:border-yellow-600 dark:placeholder-yellow-300 text-yellow-900 dark:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full md:w-1/3"
        />
      </section>

      {/* Filter Buttons */}
      <section className="flex flex-wrap gap-4 mb-10">
        {filterValues.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-full border transition-colors text-sm font-medium ${
              state.category === category
                ? "bg-yellow-500 dark:bg-yellow-600 text-white"
                : "bg-yellow-300 dark:bg-yellow-800 hover:bg-yellow-400 dark:hover:bg-yellow-700 text-yellow-900"
            }`}
            onClick={() =>
              dispatch({ type: "SET_CATEGORY", payload: category })
            }
          >
            {category}
          </button>
        ))}
      </section>

      {/* Verse Card Section */}
      <VerseCard verses={filteredVerses} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default Home;
