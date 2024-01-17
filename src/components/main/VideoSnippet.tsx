import React from 'react';
import { PiTelevision } from 'react-icons/pi';
import getViewCount from '../utils/getViewCount';
import getRelativeTime from '../utils/getRelativeTime';

interface snippet {
  [key: string]: string;
}

export default function VideoSnippet({
  title,
  channelTitle,
  viewCount,
  publishedAt,
  profileURL,
}: snippet) {
  return (
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
    </div>
  );
}
