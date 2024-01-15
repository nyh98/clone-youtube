import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoPlayer() {
  const { videoId } = useParams();

  return (
    <iframe
      id="player"
      className="h-[480px] w-[850px] rounded-2xl"
      allow="fullscreen"
      src={`https://www.youtube.com/embed/${videoId}`}
    ></iframe>
  );
}
