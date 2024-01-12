import React from 'react';
import Header from '../components/header/Header';
import SideNav from '../components/side/SideNav';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-full w-full absolute overflow-hidden">
      <Header />
      <div className="flex h-full dark:bg-zinc-900">
        <SideNav />
        <main className="mx-5 mt-5 w-full h-full overflow-auto  dark:text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
