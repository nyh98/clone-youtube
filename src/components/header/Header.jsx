import React from 'react';
import LeftNavbar from './leftNavbar/LeftNavbar';
import SearchBar from './searchBar/SearchBar';
import RightNavbar from './rightNavbar/RightNavbar';

export default function Header() {
  return (
    <div className="flex justify-between px-4 h-14 w-full fixed dark:bg-zinc-900">
      <LeftNavbar />
      <SearchBar />
      <RightNavbar />
    </div>
  );
}
