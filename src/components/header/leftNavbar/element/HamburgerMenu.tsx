import React, { useContext } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { hamburgerContext } from '../../../../context/HamburgerMenuContext';

export default function HamburgerMenu() {
  const { hamburgerMenuChecked, setHamburgerCheck } =
    useContext(hamburgerContext);

  return (
    <div className="group w-10 h-auto justify-center items-center flex">
      <RxHamburgerMenu className="w-6 h-6 absolute hover:cursor-pointer" />
      <div
        className="absolute w-full h-full z-10"
        onClick={() => setHamburgerCheck(!hamburgerMenuChecked)}
      ></div>
    </div>
  );
}
