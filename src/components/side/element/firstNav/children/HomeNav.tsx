import React from 'react';
import { IoMdHome } from 'react-icons/io';
import CustomNav from '../../../../utils/CustomNav';

export default function HomeNav() {
  return (
    <CustomNav title={'홈'}>
      <IoMdHome className="w-7 h-7" />
    </CustomNav>
  );
}
