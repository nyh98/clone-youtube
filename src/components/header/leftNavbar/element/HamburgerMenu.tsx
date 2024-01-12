import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function HamburgerMenu() {
  return (
    <div className="relative group w-10 h-auto justify-center items-center flex">
      <RxHamburgerMenu className="w-6 h-6 absolute hover:cursor-pointer z-10" />
    </div>
  );
}
