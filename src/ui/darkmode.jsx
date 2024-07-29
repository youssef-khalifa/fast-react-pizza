import { useState, useEffect } from "react";

function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="ml-4 px-2 py-1 border rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {darkMode ? "☀" : "🌑"}
    </button>
  );
}

export default Darkmode;
