import React from 'react';
import { Link } from 'react-router-dom';

interface videos {
  title: string;
  thumbnail: string;
  link: string;
}

export default function VideoBox({ title, thumbnail, link }: videos) {
  return (
    <div className="w-[360px] h-80 mx-3">
      <Link to={`/video/${link}`}>
        <img src={thumbnail} className="h-2/3 rounded-2xl"></img>
      </Link>
      <div className="flex ">
        <div className="h-11 line-clamp-2 ">{title}</div>
      </div>
    </div>
  );
}
