import React from 'react';
import HamburgerMenu from './element/HamburgerMenu';
import MainLogo from './element/MainLogo';
import CustomButton from '../../utils/CustomButton';

export default function LeftNavbar() {
  return (
    <nav className="flex">
      <CustomButton>
        <HamburgerMenu />
      </CustomButton>
      <MainLogo />
    </nav>
  );
}
