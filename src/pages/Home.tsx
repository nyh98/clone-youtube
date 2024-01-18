import React, { useState } from 'react';
import Header from '../components/header/Header';
import SideNav from '../components/side/SideNav';
import { Outlet } from 'react-router-dom';
import HamburgerMenuContext from '../context/HamburgerMenuContext';

export default function Home() {
  const [watchedData, setWatchedData] = useState([{}]);
  return (
    <div className="h-full w-full absolute dark:bg-zinc-900">
      <HamburgerMenuContext>
        <Header />
        <div className="flex w-full h-[90%]">
          <SideNav />
          <main className="px-5 pt-10 w-full h-full overflow-auto dark:text-white">
            <Outlet context={{ watchedData, setWatchedData }} />
          </main>
        </div>
      </HamburgerMenuContext>
    </div>
  );
}
