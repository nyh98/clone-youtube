import React from 'react';
import LeftNavbar from './leftNavbar/LeftNavbar';
import SearchBar from './searchBar/SearchBar';

export default function Header() {
  return (
    <div className="flex justify-between px-4">
      <LeftNavbar />
      <SearchBar />
    </div>
  );
}
