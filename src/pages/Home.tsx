import React from 'react';
import Header from '../components/header/Header';
import SideNav from '../components/side/SideNav';

export default function Home() {
  return (
    <div className="h-full w-full absolute">
      <Header />
      <SideNav />
    </div>
  );
}
