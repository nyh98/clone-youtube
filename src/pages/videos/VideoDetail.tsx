import React from 'react';

import VideoPlayer from '../../components/main/VideoPlayer';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import getVideoDetail from '../../APIs/getVideoDetail';
import LoadingPage from '../LoadingPage';
import ErrorPage from '../ErrorPage';
import VideoSnippet from '../../components/main/VideoSnippet';
import VideoComment from '../../components/main/VideoComment';

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

  const item = data?.video.items[0];

  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-full h-full flex justify-center ">
        <div className="w-[70%]">
          <VideoPlayer videoId={videoId} />
          <VideoSnippet
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
            viewCount={item.statistics.viewCount}
            publishedAt={item.snippet.publishedAt}
            profileURL={data?.channelDetail[0].profileURL}
          />
          <VideoComment
            videoId={videoId}
            commentCount={item.statistics.commentCount}
          />
        </div>
      </div>
      <div className=" max-md:hidden">관련 영상들</div>
    </div>
  );
}
