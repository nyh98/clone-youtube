import React from 'react';
import { Link } from 'react-router-dom';
import getRelativeTime from '../../utils/getRelativeTime';
import { PiTelevision } from 'react-icons/pi';

interface SideVideo {
  videoId: string;
  thumbnailURL: string;
  title: string;
  channelTitle: string;
  publishedAt: string;
  description: string;
}
export default function SearchVideoBox({
  videoId,
  thumbnailURL,
  title,
  channelTitle,
  publishedAt,
  description,
}: SideVideo) {
  return (
    <div className="flex mx-12 pt-3 pb-3   border-b-2 max-md:flex-col ">
      <Link
        to={`/video/${videoId}`}
        className="flex-shrink-0 w-[360px] max-md:w-full "
      >
        <img
          src={thumbnailURL}
          alt="thumbnails"
          className="w-full aspect-video rounded-2xl object-cover"
        />
      </Link>
      <div className="ml-2">
        <div className="line-clamp-2 text-2xl font-medium">{title}</div>
        <div className="text-xs line-clamp-1 flex mt-4">
          <PiTelevision className="mt-[2px] mr-1" />
          {channelTitle}
        </div>
        <div className="text-xs">{getRelativeTime(publishedAt)}</div>
        <div className="text-xs line-clamp-1">{description}</div>
      </div>
      <div className="w-[20%] max-md:hidden"></div>
    </div>
  );
}
