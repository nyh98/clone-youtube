import React from 'react';
import { LiaVideoSolid } from 'react-icons/lia';
import CustomNav from '../../../../utils/CustomNav';
export default function SubscribeNav() {
  return (
    <CustomNav title={'구독'}>
      <LiaVideoSolid className="w-7 h-7" />
    </CustomNav>
  );
}
