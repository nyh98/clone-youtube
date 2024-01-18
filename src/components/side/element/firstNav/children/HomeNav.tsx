import React from 'react';
import { IoMdHome } from 'react-icons/io';
import CustomNav from '../../../../utils/CustomNav';
import { Link } from 'react-router-dom';

export default function HomeNav() {
  return (
    <Link to="/">
      <CustomNav title={'홈'}>
        <IoMdHome className="w-7 h-7" />
      </CustomNav>{' '}
    </Link>
  );
}
