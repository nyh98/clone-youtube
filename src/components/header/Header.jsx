import React from 'react';
import LeftNavbar from './leftNavbar/LeftNavbar';
import SearchBar from './searchBar/SearchBar';
import RightNavbar from './rightNavbar/RightNavbar';

export default function Header() {
  return (
    <div className="grid grid-cols-[1fr,2fr,1fr] bg-white z-10 justify-between px-4 h-[10%] w-full  dark:bg-zinc-900">
      <LeftNavbar />
      <SearchBar />
      <RightNavbar />
    </div>
  );
}
