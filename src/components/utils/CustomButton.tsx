import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export default function CustomButton({ children }: ButtonProps) {
  return (
    <div className="relative group w-10 h-auto justify-center items-center flex">
      {children}
      {/* <RxHamburgerMenu className="w-6 h-6 absolute hover:cursor-pointer z-10" /> */}
      <div className=" w-10 h-10  rounded-full absolute group-hover:bg-stone-300 opacity-25"></div>
    </div>
  );
}
