import React from 'react';
import getRelativeTime from '../../utils/getRelativeTime';

interface Comment {
  authorProfileImageUrl: string;
  authorDisplayName: string;
  updatedAt: string;
  textDisplay: string;
}

export default function CommentBox({
  authorProfileImageUrl,
  authorDisplayName,
  updatedAt,
  textDisplay,
}: Comment) {
  return (
    <div className="flex mt-5">
      <img
        src={authorProfileImageUrl}
        alt=""
        className="w-10 h-10 rounded-full"
      />
      <div className="ml-3">
        <div className="flex">
          <p className="font-semibold">{authorDisplayName}</p>
          <span className="ml-2 pt-1 text-xs flex items-center">
            {getRelativeTime(updatedAt)}
          </span>
        </div>
        <div className="max-md:line-clamp-2 my-1 font-light">{textDisplay}</div>
      </div>
    </div>
  );
}
