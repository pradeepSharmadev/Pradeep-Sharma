"use client";
import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [isDark, setIsDark] = useState(false);

  // On first load, check saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      <span className="material-symbols-outlined !text-[20px] transition-all duration-300">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
