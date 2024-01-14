import React from 'react';

interface videos {
  title: string;
  thumbnail: string;
  // profileUrl: string;
}

export default function VideoBox({ title, thumbnail }: videos) {
  return (
    <div className="w-[360px] h-80 mx-3">
      <img src={thumbnail} className="h-2/3 rounded-2xl"></img>
      <div className="flex ">
        <div className="h-11 line-clamp-2 ">{title}</div>
      </div>
    </div>
  );
}
