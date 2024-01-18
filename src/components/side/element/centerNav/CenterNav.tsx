import React from 'react';
import CustomNav from '../../../utils/CustomNav';
import { MdOutlineMoreTime } from 'react-icons/md';

export default function CenterNav() {
  return (
    <div className="hover:cursor-pointer">
      <CustomNav title={'시청 기록'}>
        <MdOutlineMoreTime className="w-7 h-7" />
      </CustomNav>
    </div>
  );
}
