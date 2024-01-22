import React, { useState } from 'react';
import { BsBell } from 'react-icons/bs';

export default function AlarmNav() {
  const [alarm, setAlarm] = useState(false);

  return (
    <div className="w-6 h-6 hover:cursor-pointer flex justify-center items-center ">
      <BsBell />
      <div
        className="absolute w-full h-full z-10"
        onClick={() => {
          setAlarm(!alarm);
        }}
      ></div>
      <div
        style={{ display: alarm ? '' : 'none' }}
        className="fixed w-[480px] aspect-square top-[60px] right-12 rounded-xl border-[1px] z-20 hover:cursor-default text-center max-sm:right-0 max-sm:w-[300px] bg-white  dark:bg-zinc-900"
      >
        <div className="border-b-[1px] w-full h-[10%] flex items-center pl-5">
          알림
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center">
          <BsBell className="w-[300px] h-[100px] mb-6 text-slate-300" />
          <div>여기에 알림이 표시됩니다.</div>
          <div>즐겨찾는 채널을 구독하여 최신 동영상의 알림을 받아 보세요.</div>
        </div>
      </div>
    </div>
  );
}
