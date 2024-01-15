import React from 'react';
import { Link } from 'react-router-dom';
import { PiTelevision } from 'react-icons/pi';

interface videos {
  [key: string]: string;
}

export default function VideoBox({
  title,
  thumbnail,
  link,
  publishedAt,
  channelTitle,
  viewCount,
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

  function getRelativeViewCount() {
    const scale = Math.floor(+viewCount / 10000); //만 단위로 나눔

    if (scale >= 10000) {
      return `조회수 ${Math.floor(scale / 10000)}억회`;
    } else if (scale > 0) {
      return `조회수 ${Math.floor(scale)}만회`;
    }

    return `조회수 ${scale.toLocaleString('ko-KR')}회`;
  }

  return (
    <div className="w-[360px] h-80 mx-3">
      <Link to={`/video/${link}`}>
        <img src={thumbnail} className="h-2/3 rounded-2xl"></img>
      </Link>
      <div className="flex flex-col">
        <div className="line-clamp-2 dark:font-bold">{title}</div>

        <div className="font-thin">
          <PiTelevision className="inline-block" /> {channelTitle}
          <div>
            {getRelativeViewCount()} {getRelativeTime()}
          </div>
        </div>
      </div>
    </div>
  );
}
