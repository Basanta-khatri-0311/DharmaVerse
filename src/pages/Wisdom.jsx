import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LOCAL_STORAGE_KEY = "dharmaverse_verses";

const Wisdom = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorite verses from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const allVerses = JSON.parse(stored);
      const favOnly = allVerses.filter((verse) => verse.isFavorite);
      setFavorites(favOnly);
    }
  }, []);

  // Remove verse from favorites
  const removeFromFavorites = (id) => {
    // Get latest from localStorage
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stored) return;

    const allVerses = JSON.parse(stored);
    const updatedVerses = allVerses.map((verse) =>
      verse.id === id ? { ...verse, isFavorite: false } : verse
    );

    // Update localStorage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedVerses));

    // Update local state (remove from UI)
    setFavorites(updatedVerses.filter((verse) => verse.isFavorite));
  };

  return (
    <div className="px-6 md:px-16 py-10 max-w-full mx-auto">
      <h2 className="font-bold text-4xl text-yellow-700 text-center mb-10">
        📚 My Wisdom
      </h2>

      <section className="grid gap-6">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 text-center text-yellow-800">
            <i className="ri-emotion-sad-line text-9xl md:text-12xl mb-4 animate-pulse"></i>
            <p className="text-xl font-semibold mb-2">No wisdom saved yet!</p>
            <p className="text-md max-w-md">
              It looks like you haven't added any verses to your favorites. Go
              explore the teachings and tap the ❤️ icon to save what resonates
              with you.
            </p>
            <NavLink
              to={"/"}
              className="mt-6 px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-medium rounded-full transition-colors shadow-md"
            >
              Explore Verses
            </NavLink>
          </div>
        ) : (
          favorites.map((verse) => (
            <div
              key={verse.id}
              className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-xl shadow-md transition-all"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold font-serif text-yellow-900 dark:text-yellow-100">
                  📜 {verse.title}
                </span>
                <button
                  onClick={() => removeFromFavorites(verse.id)}
                  className="text-xl text-yellow-900 dark:text-yellow-100 hover:text-red-500 transition-colors"
                  title="Remove from favorites"
                >
                  <i className="ri-delete-bin-5-line"></i>
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
    </div>
  );
};

export default Wisdom;
