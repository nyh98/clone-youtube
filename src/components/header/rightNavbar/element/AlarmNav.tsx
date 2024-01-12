import React from 'react';
import { BsBell } from 'react-icons/bs';

export default function AlarmNav() {
  return (
    <div className="w-6 h-6 absolute hover:cursor-pointer flex justify-center items-center z-10">
      <BsBell />
    </div>
  );
}
