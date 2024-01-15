import React from 'react';
import VideoBox from '../../components/main/VideoBox';
import { useQuery } from 'react-query';
import getPopularVideos from '../../APIs/getPopularVideos';
import LoadingPage from '../LoadingPage';
import ErrorPage from '../ErrorPage';
import useGetPopularVideos from '../../hooks/useGetPopularVideos';

interface item {
  [key: string]: any;
}

export default function PopularVideos() {
  const { isLoading, error, data } = useGetPopularVideos();

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  const { items } = data;

  return (
    <div className="flex flex-wrap justify-center">
      {items &&
        items.map((item: item) => (
          <VideoBox
            key={item.id}
            title={item.snippet.title}
            thumbnail={item.snippet.thumbnails.medium.url}
            link={item.id}
            publishedAt={item.snippet.publishedAt}
            channelTitle={item.snippet.channelTitle}
            viewCount={item.statistics.viewCount}
          />
        ))}
    </div>
  );
}
