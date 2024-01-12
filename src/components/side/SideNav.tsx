import React from 'react';
import FirstNav from './element/firstNav/FirstNav';
import CenterNav from './element/centerNav/CenterNav';
import Footer from './element/lastNav/Footer';

export default function SideNav() {
  return (
    <div className="flex flex-col pt-3 w-20 h-full max-sm:hidden  dark:bg-zinc-900">
      <FirstNav />
      <CenterNav />
      <Footer />
    </div>
  );
}
