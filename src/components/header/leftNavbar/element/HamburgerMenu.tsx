import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import '../../../..';

export default function HamburgerMenu() {
  return (
    <div className="ml-4 mt-2 mr-8 relative group">
      <RxHamburgerMenu className="absolute  left-1 top-1 hover:cursor-pointer z-10" />
      <div className="w-6 h-6 absolute rounded-full group-hover:bg-stone-300 opacity-25"></div>
    </div>
  );
}
