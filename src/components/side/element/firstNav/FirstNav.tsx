import React from 'react';
import HomeNav from './children/HomeNav';
import SubscribeNav from './children/SubscribeNav';

export default function FirstNav() {
  return (
    <div className="flex flex-col">
      <HomeNav />
      <SubscribeNav />
    </div>
  );
}
