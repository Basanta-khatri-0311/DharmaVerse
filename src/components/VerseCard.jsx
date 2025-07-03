import React from "react";

const VerseCard = ({ verses, toggleFavorite }) => {
  const speakText = async (text) => {
    speechSynthesis.cancel();

    // Wait until voices are loaded
    if (!speechSynthesis.getVoices().length) {
      await new Promise((resolve) => {
        speechSynthesis.onvoiceschanged = resolve;
      });
    }

    const voices = speechSynthesis.getVoices();

    const nepaliFemale = voices.find(
      (v) => v.lang === "ne-NP" && v.name.toLowerCase().includes("female")
    );
    const nepaliFallback = voices.find((v) => v.lang === "ne-NP");

    const hindiFemale = voices.find(
      (v) => v.lang === "hi-IN" && v.name.toLowerCase().includes("female")
    );
    const hindiFallback = voices.find((v) => v.lang === "hi-IN");

    const selectedVoice =
      nepaliFemale || hindiFemale || nepaliFallback || hindiFallback;

    if (!selectedVoice) {
      alert("Sorry, can't find a suitable voice.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.lang = selectedVoice.lang;
    utterance.rate = 0.9;
    utterance.pitch = 1.1;

    speechSynthesis.speak(utterance);
  };

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
            className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-xl shadow-md transition-all relative"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold font-serif text-yellow-900 dark:text-yellow-100">
                📜 {verse.title}
              </span>
              <button
                onClick={() => toggleFavorite(verse.id)}
                className="text-xl text-yellow-900 dark:text-yellow-100 hover:text-red-500 transition-colors"
                aria-label="Add verse to your wisdom"
                title="Add verse to your wisdom"
              >
                {verse.isFavorite ? (
                  <i className="ri-heart-3-fill"></i>
                ) : (
                  <i className="ri-heart-3-line"></i>
                )}
              </button>
            </div>

            {/* Verse Content */}
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-lg font-medium italic text-yellow-900 dark:text-yellow-200">
                {verse.sanskrit}
              </span>
              <span className="text-base text-yellow-800 dark:text-yellow-300">
                {verse.english}
              </span>
              <button
                onClick={() => speakText(verse.sanskrit)}
                className="mt-2 self-start text-xl md:text-2xl text-yellow-700 hover:text-yellow-900 dark:text-yellow-200 dark:hover:text-white"
                aria-label="Play Sanskrit Verse"
                title="Play Sanskrit Verse"
              >
                <i className="ri-mic-fill"></i>
              </button>
            </div>

            {/* Verse Meta */}
            <div className="flex justify-between items-center text-sm text-yellow-700 dark:text-yellow-400">
              <span>🧘 {verse.tag}</span>
              <span className="italic">Chapter {verse.chapter}</span>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default VerseCard;
