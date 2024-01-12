import React from 'react';

interface videos {
  title: string;
  thumbnail: string;
}

export default function VideoBox({ title, thumbnail }: videos) {
  return (
    <div className="w-80 h-80 mx-3">
      <img src={thumbnail} className="bg-orange-500 h-2/3"></img>
      <div className="h-11 line-clamp-2 ">{title}</div>
    </div>
  );
}
