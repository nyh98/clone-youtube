import React from 'react';
import { useParams } from 'react-router-dom';

interface Props {
  videoId: string | undefined;
}

export default function VideoPlayer({ videoId }: Props) {
  return (
    <iframe
      id="player"
      className="h-[480px] w-[850px] rounded-2xl"
      allow="fullscreen"
      src={`https://www.youtube.com/embed/${videoId}`}
    ></iframe>
  );
}
