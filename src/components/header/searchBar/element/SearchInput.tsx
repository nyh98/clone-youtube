import React, { useState } from 'react';
import SearchButton from './SearchButton';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
  const [keyWord, setKeyWord] = useState('');
  const navigate = useNavigate();

  return (
    <div className="h-10 w-full">
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          navigate(`/search/${keyWord}`);
        }}
        className="flex"
      >
        <input
          placeholder="검색"
          type="text"
          value={keyWord}
          onChange={e => setKeyWord(e.target.value)}
          id=""
          className="h-10 border-solid flex-1 border shadow focus:outline-none py-1 border-slate-300 pl-5 rounded-s-full"
        />
        <SearchButton />
      </form>
    </div>
  );
}
