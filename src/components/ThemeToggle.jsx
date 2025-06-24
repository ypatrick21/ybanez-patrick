import { useEffect, useState } from "react";
import "./ThemeToggle.css"; // We'll place your CSS here

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isLight = storedTheme === "light";
    setIsLightMode(isLight);
    document.documentElement.classList.toggle("light-mode", isLight);
  }, []);

  const toggleTheme = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    document.documentElement.classList.toggle("light-mode", newMode);
    localStorage.setItem("theme", newMode ? "light" : "dark");
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isLightMode} onChange={toggleTheme} />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
