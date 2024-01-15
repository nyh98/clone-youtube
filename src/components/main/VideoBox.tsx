import React from 'react';
import { Link } from 'react-router-dom';

interface videos {
  title: string;
  thumbnail: string;
  link: string;
  publishedAt: string;
}

export default function VideoBox({
  title,
  thumbnail,
  link,
  publishedAt,
}: videos) {
  function getRelativeTime() {
    const currentDate = new Date().getTime();
    const videoDate = new Date(publishedAt).getTime();

    const diff = (currentDate - videoDate) / 1000;

    const times = [
      { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
      { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
      { name: '일', milliSeconds: 60 * 60 * 24 },
      { name: '시간', milliSeconds: 60 * 60 },
      { name: '분', milliSeconds: 60 },
    ];

    for (let time of times) {
      const betweenTime = Math.floor(diff / time.milliSeconds);

      if (betweenTime > 0) {
        return `${betweenTime}${time.name} 전`;
      }
    }
    return '방금 전';
  }

  return (
    <div className="w-[360px] h-80 mx-3">
      <Link to={`/video/${link}`}>
        <img src={thumbnail} className="h-2/3 rounded-2xl"></img>
      </Link>
      <div className="flex flex-col">
        <div className="h-11 line-clamp-2 ">{title}</div>
        <div>{getRelativeTime()}</div>
      </div>
    </div>
  );
}
