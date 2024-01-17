import React from 'react';

import VideoPlayer from '../../components/main/VideoPlayer';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import getVideoDetail from '../../APIs/getVideoDetail';
import LoadingPage from '../LoadingPage';
import ErrorPage from '../ErrorPage';
import VideoSnippet from '../../components/main/VideoSnippet';
import VideoComment from '../../components/main/videoComment/VideoComment';
import SideVideos from '../../components/main/sideVideos/SideVideos';

export default function VideoDetail() {
  const { videoId } = useParams();
  const { isLoading, error, data } = useQuery('videoDetail', () =>
    getVideoDetail(videoId)
  );

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  const item = data?.video.items[0];

  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex ">
        <div className="">
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
        <SideVideos videoTitle={item.snippet.title} />
      </div>
    </div>
  );
}
