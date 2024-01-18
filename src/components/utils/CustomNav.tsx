import React, { useContext } from 'react';
import { hamburgerContext } from '../../context/HamburgerMenuContext';

type NavProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  eventFunction?: Function;
};

export default function CustomNav({ children, title }: NavProps) {
  const { hamburgerMenuChecked } = useContext(hamburgerContext);
  return (
    <div
      style={hamburgerMenuChecked ? { justifyContent: 'start' } : {}}
      className="flex h-16 group relative justify-center items-center dark:text-white"
    >
      <button
        style={
          hamburgerMenuChecked
            ? { flexDirection: 'row', paddingLeft: '10px' }
            : {}
        }
        className={
          'flex flex-col justify-center items-center ml-1.5 group-hover:cursor-pointer z-10'
        }
      >
        {children}
        <p
          style={
            hamburgerMenuChecked
              ? { paddingLeft: '10px', fontSize: '17px' }
              : {}
          }
          className="text-xs"
        >
          {title}
        </p>
      </button>
      <div className="w-full h-full ml-1.5 rounded-xl absolute group-hover:bg-stone-300 opacity-25"></div>
    </div>
  );
}
