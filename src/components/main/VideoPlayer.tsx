import React from 'react';

interface Props {
  videoId: string | undefined;
}

export default function VideoPlayer({ videoId }: Props) {
  return (
    <div className="aspect-video relative">
      <iframe
        id="player"
        className="absolute h-full w-full rounded-2xl mb-5"
        allow="fullscreen"
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
    </div>
  );
}
// h-[480px] w-[850px]
