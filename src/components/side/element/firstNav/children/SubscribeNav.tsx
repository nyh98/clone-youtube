import React from 'react';
import { LiaVideoSolid } from 'react-icons/lia';
import CustomNav from '../../../../utils/CustomNav';
import { Link } from 'react-router-dom';
export default function SubscribeNav() {
  return (
    <Link to={'/subscribe'}>
      <CustomNav title={'구독'}>
        <LiaVideoSolid className="w-7 h-7" />
      </CustomNav>{' '}
    </Link>
  );
}
