import React from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function SearchButton() {
  return (
    <div className="h-10 w-16 flex items-center shadow border justify-center border-slate-300 border-solid rounded-e-full">
      <button>
        <IoIosSearch />
      </button>
    </div>
  );
}
