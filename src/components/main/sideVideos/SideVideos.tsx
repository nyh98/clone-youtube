import React from 'react';
import { useQuery } from 'react-query';
import searchVideo from '../../../APIs/searchVideo';
import LoadingPage from '../../../pages/LoadingPage';
import ErrorPage from '../../../pages/ErrorPage';
import SideVideoBox from './SideVideoBox';

interface Item {
  [key: string]: any;
}

export default function SideVideos() {
  const { isLoading, error, data } = useQuery(
    'sideVideos',
    () => searchVideo('videoTitle'),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  const { items } = data;

  return (
    <div className="flex flex-col w-[30%] flex-shrink-0 max-xl:hidden ">
      {items.map((item: Item) => {
        return (
          <SideVideoBox
            videoId={item.id.videoId}
            thumbnailURL={item.snippet.thumbnails.high.url}
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
            publishedAt={item.snippet.publishedAt}
          />
        );
      })}
    </div>
  );
}
