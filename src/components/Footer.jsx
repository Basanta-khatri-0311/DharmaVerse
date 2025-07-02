import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 py-6 text-center text-sm text-yellow-700 bg-yellow-100 border-t border-yellow-300 font-bold">
      <p className="max-w-xl mx-auto">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">DharmaVerse</span> — Spreading Wisdom with Light{" "}
        <span role="img" aria-label="Om symbol">🕉️</span>
      </p>
    </footer>
  );
};

export default Footer
