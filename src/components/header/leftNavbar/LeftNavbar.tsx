import React from 'react';
import HamburgerMenu from './element/HamburgerMenu';
import MainLogo from './element/MainLogo';
import CustomButton from '../../utils/CustomButton';

export default function LeftNavbar() {
  return (
    <nav className="flex h-14 w-auto ">
      <CustomButton>
        <HamburgerMenu />
      </CustomButton>
      <MainLogo />
    </nav>
  );
}
