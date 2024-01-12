import React from 'react';
import { Link } from 'react-router-dom';

export default function MainLogo() {
  return (
    <Link to="/" className="flex mt-2">
      <img
        src="https://developers.google.com/static/site-assets/logo-youtube.svg"
        alt="logo"
        className="w-5 h-6"
      />
      <p className="ml-1 pt-0.5 font-bold text-sm">YongTube</p>
    </Link>
  );
}
