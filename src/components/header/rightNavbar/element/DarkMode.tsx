import React, { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { PiSunBold } from 'react-icons/pi';

const getDarkModeFromLocalStorage = (): boolean => {
  return JSON.parse(localStorage.getItem('dark') || 'false');
};

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(getDarkModeFromLocalStorage);

  const handleDarkMode = () => {
    setDarkMode(mode => !mode);
    if (!darkMode) {
      document.documentElement.className = 'dark';
    } else {
      document.documentElement.className = '';
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.className = 'dark';
    } else {
      document.documentElement.className = '';
    }
  }, []);

  useEffect(() => {
    const dark = JSON.stringify(darkMode);
    localStorage.setItem('dark', dark);
  }, [darkMode]);

  return (
    <div className="w-6 h-6  hover:cursor-pointer flex justify-center items-center ">
      {darkMode ? <PiSunBold /> : <MdDarkMode />}
      <div
        className="w-full h-full absolute z-10"
        onClick={handleDarkMode}
      ></div>
    </div>
  );
}
