import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export default function CustomButton({ children }: ButtonProps) {
  return (
    <div className="relative group hover:cursor-pointer w-10 h-auto justify-center items-center flex dark:text-white">
      {children}
      <div className="w-10 h-10  rounded-full absolute group-hover:bg-stone-300 opacity-25"></div>
    </div>
  );
}
