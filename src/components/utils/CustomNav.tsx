import React from 'react';

type CustomNav = {
  children: React.ReactNode;
  title: React.ReactNode;
};

export default function CustomNav({ children, title }: CustomNav) {
  return (
    <div className="flex  h-16 group relative justify-center items-center dark:text-white">
      <button className="flex flex-col justify-center items-center ml-1.5 group-hover:cursor-pointer z-10">
        {children}
        <p className="text-xs">{title}</p>
      </button>

      <div className="w-full h-full ml-1.5 rounded-xl absolute group-hover:bg-stone-300 opacity-25"></div>
    </div>
  );
}
