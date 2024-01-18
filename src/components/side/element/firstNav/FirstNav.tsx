import React, { useContext } from 'react';
import HomeNav from './children/HomeNav';
import SubscribeNav from './children/SubscribeNav';
import { hamburgerContext } from '../../../../context/HamburgerMenuContext';

export default function FirstNav() {
  const { hamburgerMenuChecked } = useContext(hamburgerContext);
  return (
    <div
      style={hamburgerMenuChecked ? { borderBottomWidth: '1px' } : {}}
      className="flex flex-col"
    >
      <HomeNav />
      <SubscribeNav />
    </div>
  );
}
