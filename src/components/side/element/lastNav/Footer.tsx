import React, { useContext, useState } from 'react';
import CustomNav from '../../../utils/CustomNav';
import { FaRegSmile } from 'react-icons/fa';
import { hamburgerContext } from '../../../../context/HamburgerMenuContext';

export default function Footer() {
  const [clickMe, setClickMe] = useState(false);
  const { hamburgerMenuChecked } = useContext(hamburgerContext);

  return (
    <div>
      <div onClick={() => setClickMe(!clickMe)}>
        <CustomNav title={'Click Me!'}>
          <FaRegSmile className="w-7 h-7" />
        </CustomNav>
      </div>
      <div
        style={
          clickMe
            ? { left: hamburgerMenuChecked ? '192px' : '96px' }
            : { display: 'none' }
        }
        className="w-[500px] flex flex-col justify-center items-center aspect-video rounded-xl text-center bottom-40 border bg-white fixed dark:bg-zinc-900 dark:text-white"
      >
        <p>학습용으로 제작한 유튜브 클론 페이지 입니다. by nyh98</p>
        <p>
          This is a YouTube clone page created for learning purposes. by nyh98
        </p>
      </div>
    </div>
  );
}
