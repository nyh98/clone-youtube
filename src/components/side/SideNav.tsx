import React, { useContext } from 'react';
import FirstNav from './element/firstNav/FirstNav';
import CenterNav from './element/centerNav/CenterNav';
import Footer from './element/lastNav/Footer';
import { hamburgerContext } from '../../context/HamburgerMenuContext';

export default function SideNav() {
  const { hamburgerMenuChecked } = useContext(hamburgerContext);
  return (
    <div
      style={hamburgerMenuChecked ? { width: '200px' } : { width: '80px' }}
      className="flex flex-col bg-white z-10 h-full max-sm:hidden  dark:bg-zinc-900"
    >
      <FirstNav />
      <CenterNav />
      <Footer />
    </div>
  );
}
