import React from 'react';

import VideoPlayer from '../../components/main/VideoPlayer';

export default function VideoDetail() {
  return (
    <div className="flex justify-center w-full h-full ">
      <div className="w-[60%] flex justify-center ">
        <VideoPlayer />
      </div>
      <div className="w-[20%] max-md:hidden">관련 영상들</div>
    </div>
  );
}
