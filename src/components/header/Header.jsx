import React from 'react';
import LeftNavbar from './leftNavbar/LeftNavbar';
import SearchBar from './searchBar/SearchBar';

export default function Header() {
  return (
    <div className="flex ">
      <LeftNavbar />
      <SearchBar />
    </div>
  );
}
