import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import searchVideo from '../../../APIs/searchVideo';
import LoadingPage from '../../../pages/LoadingPage';
import ErrorPage from '../../../pages/ErrorPage';
import SideVideoBox from './SideVideoBox';

interface Item {
  [key: string]: any;
}

interface VideoTitle {
  channelTitle: string | undefined;
}

export default function SideVideos({ channelTitle }: VideoTitle) {
  const { isLoading, refetch, error, data } = useQuery(
    'sideVideos',
    () => searchVideo(channelTitle),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [channelTitle]);

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  const { items } = data;

  return (
    <div className="flex flex-col w-[30%] flex-shrink-0 max-xl:hidden ">
      {items.map((item: Item) => {
        return (
          <SideVideoBox
            key={item.id.videoId}
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
