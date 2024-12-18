"use client";
import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function Theme() {
  // Initialize theme state based on localStorage
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check localStorage for theme preference on component mount
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []); // Run only once on mount

  useEffect(() => {
    const root = document.documentElement;

    // Toggle dark or light theme class
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      
      // Update CSS variables for dark theme
      root.style.setProperty('--background', '#353839');
      root.style.setProperty('--foreground', '#f6f6f6');
    } else {
      root.classList.remove("dark");
      root.classList.add("light");

      // Update CSS variables for light theme
      root.style.setProperty('--background', '#f7f7f7');
      root.style.setProperty('--foreground', '#222222');
    }

    // Persist theme preference in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle theme between light and dark
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      {/* Theme Toggle Option */}
      <button
        onClick={toggleTheme}
        className="flex items-center hover:text-gray-500"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 pointer-events-none" />
        ) : (
          <Moon className="w-5 h-5 pointer-events-none" />
        )}
      </button> 
    </div>
  );
}