import React from 'react';
import DarkMode from './element/DarkMode';
import AlarmNav from './element/AlarmNav';
import CustomButton from '../../utils/CustomButton';

export default function RightNavbar() {
  return (
    <nav className="flex items-center">
      <CustomButton>
        <DarkMode />
      </CustomButton>
      <CustomButton>
        <AlarmNav />
      </CustomButton>
    </nav>
  );
}
