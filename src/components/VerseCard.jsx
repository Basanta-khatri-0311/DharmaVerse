import React from "react";

const VerseCard = () => {
  return (
    <section className="grid gap-6">
      <div className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-xl shadow-md transition-all">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold font-serif text-yellow-900 dark:text-yellow-100">
            📜 Bhagavad Gita
          </span>
          <button className="text-xl text-yellow-900 dark:text-yellow-100 hover:text-red-500 transition-colors">
            <i className="ri-heart-3-line"></i>
          </button>
        </div>

        {/* Verse Content */}
        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium italic text-yellow-900 dark:text-yellow-200">
            योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।
          </span>
          <span className="text-base text-yellow-800 dark:text-yellow-300">
            Be steadfast in yoga, O Arjuna. Perform your duty and abandon all
            attachment to success or failure.
          </span>
          <span className="text-sm mt-2 text-yellow-700 dark:text-yellow-400">
            🧘 Karma Bhakti Yog
          </span>
        </div>
      </div>
    </section>
  );
};

export default VerseCard;
