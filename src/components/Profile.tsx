'use client'
import React, { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import { PencilLine, Moon, Sun } from 'lucide-react';

interface ProfileMenuProps {
  session: Session;
}

export default function ProfileMenu({ session }: ProfileMenuProps) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    typeof window !== "undefined" ? (localStorage.getItem("theme") as "light" | "dark") || "light" : "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    // Toggle dark or light theme class
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      
      // Update CSS variables for dark theme
      root.style.setProperty('--background', '#353839');
      root.style.setProperty('--foreground', '#f6f6f6');
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");

      // Update CSS variables for light theme
      root.style.setProperty('--background', '#fcfcfc');
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
    <div className="relative">
      <img
        src={session?.user?.image || "/user.svg"}  // Fallback if no image
        alt="Profile Image"
        className="w-9 h-9 rounded-full border-[1px] border-toggle  hover:border-gray-500 object-cover cursor-pointer"
        title={session?.user?.name?.split(' ')[0]}
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-48 bg-toggle rounded-md border-2 border-gray-500 py-2 z-10"
          onClick={() => setOpen(false)}
        >
          {/* Write Idea Option */}
          <button
            className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 rounded"
            onClick={() => alert('Navigate to Idea Creation')}
          >
            <PencilLine className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            Write Your Idea
          </button>

          {/* Theme Toggle Option */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 rounded"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5  pointer-events-none" />
            ) : (
              <Moon className="w-5 h-5   pointer-events-none" />
            )}
            Theme
          </button>
        </div>
      )}
    </div>
  );
}
