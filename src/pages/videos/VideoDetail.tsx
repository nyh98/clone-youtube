import React from 'react';

import VideoPlayer from '../../components/main/VideoPlayer';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { videoId } = useParams();
  return (
    <div className="flex justify-center w-full h-full ">
      <div className="w-[60%] flex justify-center ">
        <VideoPlayer videoId={videoId} />
      </div>
      <div className="w-[20%] max-md:hidden">관련 영상들</div>
    </div>
  );
}
