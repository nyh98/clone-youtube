import React from 'react';
import { Link } from 'react-router-dom';
import getRelativeTime from '../../utils/getRelativeTime';

interface SideVideo {
  videoId: string;
  thumbnailURL: string;
  title: string;
  channelTitle: string;
  publishedAt: string;
}
export default function SideVideoBox({
  videoId,
  thumbnailURL,
  title,
  channelTitle,
  publishedAt,
}: SideVideo) {
  return (
    <div className="flex ml-4 mb-3 pr-4 w-full max-lg:ml-0">
      <Link to={`/video/${videoId}`} className="flex-shrink-0 ">
        <img
          src={thumbnailURL}
          alt="thumbnails"
          className="w-[170px] aspect-video rounded-2xl object-cover"
        />
      </Link>
      <div className="ml-2">
        <Link to={`/video/${videoId}`} className="line-clamp-2 font-semibold">
          {title}
        </Link>
        <div className="text-xs line-clamp-1">{channelTitle}</div>
        <div className="text-xs">{getRelativeTime(publishedAt)}</div>
      </div>
    </div>
  );
}
