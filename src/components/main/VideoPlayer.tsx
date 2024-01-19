import React from 'react';

interface Props {
  videoId: string | undefined;
}

export default function VideoPlayer({ videoId }: Props) {
  return (
    <iframe
      id="player"
      className="w-full h-full rounded-2xl mb-4"
      allow="fullscreen"
      src={`https://www.youtube.com/embed/${videoId}`}
    ></iframe>
  );
}
