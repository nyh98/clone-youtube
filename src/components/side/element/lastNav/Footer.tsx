import React from 'react';
import CustomNav from '../../../utils/CustomNav';
import { FaRegSmile } from 'react-icons/fa';

export default function Footer() {
  return (
    <CustomNav title={'Click Me!'}>
      <FaRegSmile className="w-7 h-7" />
    </CustomNav>
  );
}
