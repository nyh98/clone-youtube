import React, { useEffect } from 'react';
import VideoPlayer from '../../components/main/VideoPlayer';
import { useOutletContext, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import getVideoDetail from '../../APIs/getVideoDetail';
import LoadingPage from '../LoadingPage';
import ErrorPage from '../ErrorPage';
import VideoSnippet from '../../components/main/VideoSnippet';
import VideoComment from '../../components/main/videoComment/VideoComment';
import SideVideos from '../../components/main/sideVideos/SideVideos';

interface WatchedData {
  watchedData: Watched;
  setWatchedData: Function;
}

type Watched = [{ [key: string]: string }];

export default function VideoDetail() {
  const { videoId } = useParams();
  const { isLoading, refetch, error, data } = useQuery('videoDetail', () =>
    getVideoDetail(videoId)
  );
  const { setWatchedData }: WatchedData = useOutletContext();

  useEffect(() => {
    refetch();
  }, [videoId]);

  //시청 기록에 추가
  useEffect(() => {
    if (data) {
      setWatchedData((watchedData: Watched) => {
        const item = data?.video.items[0];
        //중복 확인
        if (watchedData.findIndex(video => video.videoid === videoId) === -1) {
          return [
            ...watchedData,
            {
              title: item.snippet.title,
              channelTitle: item.snippet.channelTitle,
              viewCount: item.statistics.viewCount,
              publishedAt: item.snippet.publishedAt,
              profileURL: data?.channelDetail[0].profileURL,
              thumbnail: item.snippet.thumbnails.medium.url,
              videoid: videoId,
            },
          ];
        }
        //중복시 기존 데이터만 리턴
        return watchedData;
      });
    }
  }, [data]);

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
        <SideVideos channelTitle={item.snippet.channelTitle} />
      </div>
    </div>
  );
}
