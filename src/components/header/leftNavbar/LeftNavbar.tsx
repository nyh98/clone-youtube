import React from 'react';
import HamburgerMenu from './element/HamburgerMenu';
import MainLogo from './element/MainLogo';

export default function LeftNavbar() {
  return (
    <div className="flex h-14 w-auto ">
      <HamburgerMenu />
      <MainLogo />
    </div>
  );
}
