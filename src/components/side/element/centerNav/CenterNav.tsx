import React, { useContext } from 'react';
import CustomNav from '../../../utils/CustomNav';
import { MdOutlineMoreTime } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { hamburgerContext } from '../../../../context/HamburgerMenuContext';

export default function CenterNav() {
  const { hamburgerMenuChecked } = useContext(hamburgerContext);
  return (
    <Link
      to={'/watched'}
      style={hamburgerMenuChecked ? { borderBottomWidth: '1px' } : {}}
      className="hover:cursor-pointer"
    >
      <CustomNav title={'시청 기록'}>
        <MdOutlineMoreTime className="w-7 h-7" />
      </CustomNav>
    </Link>
  );
}
