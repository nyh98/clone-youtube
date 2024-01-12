import React from 'react';
import { MdDarkMode } from 'react-icons/md';

export default function DarkMode() {
  return (
    <div className="w-6 h-6 absolute hover:cursor-pointer flex justify-center items-center z-10">
      <MdDarkMode />
    </div>
  );
}
