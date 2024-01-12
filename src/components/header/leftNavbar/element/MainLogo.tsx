import React from 'react';
import { Link } from 'react-router-dom';

export default function MainLogo() {
  return (
    <Link to="/" className="flex items-center ml-4 max-md:hidden">
      <img
        src="https://developers.google.com/static/site-assets/logo-youtube.svg"
        alt="logo"
        className="h-5"
      />
      <div className="mb-2.5 ml-1 h-5 font-bold text-xl">YongTube</div>
    </Link>
  );
}
