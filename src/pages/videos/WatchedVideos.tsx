import React from 'react';
import { useOutletContext } from 'react-router-dom';
import VideoBox from '../../components/main/VideoBox';

interface WatchedData {
  watchedData: Watched;
  setWatchedData: Function;
}

type Watched = [{ [key: string]: string }];

export default function WatchedVideos() {
  const { watchedData }: WatchedData = useOutletContext();

  return (
    <div className="grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {watchedData.length <= 0 ? (
        <div className="text-center font-semibold">시청 기록이 없습니다 😁</div>
      ) : (
        ''
      )}
      {watchedData.map(item => (
        <VideoBox
          key={item.videoid}
          title={item.title}
          thumbnail={item.thumbnail}
          link={item.videoid}
          publishedAt={item.publishedAt}
          channelTitle={item.channelTitle}
          viewCount={item.viewCount}
          profileURL={item.profileURL}
        ></VideoBox>
      ))}
    </div>
  );
}
