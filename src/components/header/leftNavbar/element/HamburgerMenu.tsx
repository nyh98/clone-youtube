import React, { useContext } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { hamburgerContext } from '../../../../context/HamburgerMenuContext';

export default function HamburgerMenu() {
  const { hamburgerMenuChecked, setHamburgerCheck } =
    useContext(hamburgerContext);

  return (
    <div className="relative group w-10 h-auto justify-center items-center flex">
      <RxHamburgerMenu
        onClick={() => setHamburgerCheck(!hamburgerMenuChecked)}
        className="w-6 h-6 absolute hover:cursor-pointer z-10"
      />
    </div>
  );
}
