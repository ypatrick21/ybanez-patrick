import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // default: dark mode

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme !== "light"; // treat anything other than 'light' as dark
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("light-mode", !isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("light-mode", !newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
