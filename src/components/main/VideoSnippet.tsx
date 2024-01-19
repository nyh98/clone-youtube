import React from 'react';
import { PiTelevision } from 'react-icons/pi';
import getViewCount from '../utils/getViewCount';
import getRelativeTime from '../utils/getRelativeTime';
import { Link } from 'react-router-dom';

interface snippet {
  [key: string]: string;
}

export default function VideoSnippet({
  title,
  channelTitle,
  viewCount,
  publishedAt,
  profileURL,
  videoId,
}: snippet) {
  return (
    <div className="flex col-start-1 col-end-6 row-start-4 max-lg:row-start-2">
      <img
        src={profileURL}
        alt=""
        className="w-9 h-9 mt-3 mr-2  rounded-full inline-block"
      />
      <div className="flex flex-col">
        <Link to={`/video/${videoId}`} className="line-clamp-2 font-semibold">
          {title}
        </Link>
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
