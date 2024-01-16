import React from 'react';
import { Link } from 'react-router-dom';
import { PiTelevision } from 'react-icons/pi';
import getRelativeTime from '../utils/getRelativeTime';
import getViewCount from '../utils/getViewCount';

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
  profileURL,
}: videos) {
  return (
    <div className="w-full h-full mx-3">
      <Link to={`/video/${link}`}>
        <img src={thumbnail} className="h-2/3 w-full rounded-2xl"></img>
      </Link>
      <div className="flex">
        <img
          src={profileURL}
          alt=""
          className="w-9 h-9 mt-3 mr-2  rounded-full inline-block"
        />
        <div className="flex flex-col">
          <div className="line-clamp-2 font-semibold">{title}</div>
          <div className="font-thin">
            <p className="line-clamp-1">
              <PiTelevision className="inline-block" /> {channelTitle}
            </p>
            {getViewCount(viewCount)} {getRelativeTime(publishedAt)}
          </div>
        </div>
        <div className="w-[20%] h-full bg-slate-700"></div>
      </div>
    </div>
  );
}
