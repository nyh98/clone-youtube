import React from 'react';
import SearchButton from './SearchButton';

export default function SearchInput() {
  return (
    <div className="h-10">
      <form action="" className="w-96 flex">
        <input
          placeholder="검색"
          type="text"
          id=""
          className="h-10 border-solid flex-1 border shadow focus:outline-none pt-0.5 pb-0.5 border-slate-300 pl-2 rounded-s-full"
        />
        <SearchButton />
      </form>
    </div>
  );
}
