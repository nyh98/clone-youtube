import React from 'react';

interface Props {
  videoId: string | undefined;
}

export default function VideoPlayer({ videoId }: Props) {
  return (
    <iframe
      id="player"
      className="h-4/5 w-full rounded-2xl"
      allow="fullscreen"
      src={`https://www.youtube.com/embed/${videoId}`}
    ></iframe>
  );
}
// h-[480px] w-[850px]
