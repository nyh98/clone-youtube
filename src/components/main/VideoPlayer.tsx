import React from 'react';

interface Props {
  videoId: string | undefined;
}

export default function VideoPlayer({ videoId }: Props) {
  return (
    <div className="aspect-video relative col-start-1 col-end-6 row-start-1 mb-2 row-end-2 max-lg:col-end-[-1]">
      <iframe
        id="player"
        className="absolute h-full w-full rounded-2xl"
        allow="fullscreen"
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
    </div>
  );
}
