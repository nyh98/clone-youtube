import React from 'react';
import { Link } from 'react-router-dom';
import VideoSnippet from './VideoSnippet';

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
        <img
          src={thumbnail}
          alt={'profile'}
          className="aspect-video w-full rounded-2xl "
        ></img>
      </Link>
      <VideoSnippet
        title={title}
        channelTitle={channelTitle}
        viewCount={viewCount}
        publishedAt={publishedAt}
        profileURL={profileURL}
      />
      <div className="w-[20%] h-full"></div>
    </div>
  );
}
