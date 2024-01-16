import React from 'react';

import VideoPlayer from '../../components/main/VideoPlayer';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import getVideoDetail from '../../APIs/getVideoDetail';
import LoadingPage from '../LoadingPage';
import ErrorPage from '../ErrorPage';

export default function VideoDetail() {
  const { videoId } = useParams();
  const { isLoading, error, data } = useQuery(
    'videoDetail',
    () => getVideoDetail(videoId),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <div className="flex justify-center w-full h-full ">
      <div className="w-[60%] flex justify-center ">
        <VideoPlayer videoId={videoId} />
      </div>
      <div className="w-[20%] max-md:hidden">관련 영상들</div>
    </div>
  );
}
