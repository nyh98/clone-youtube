import React from 'react';
import { useQuery } from 'react-query';
import searchVideo from '../../APIs/searchVideo';
import LoadingPage from '../LoadingPage';
import ErrorPage from '../ErrorPage';
import { useParams } from 'react-router-dom';
import SearchVideoBox from '../../components/main/search/SearchVideoBox';

interface Item {
  [key: string]: any;
}

export default function SearchVideos() {
  const { keyWord } = useParams();
  const { isLoading, error, data } = useQuery(
    'searchVideos',
    () => searchVideo(keyWord),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  const { items } = data;

  return (
    <div>
      {items.map((item: Item) => {
        return (
          <SearchVideoBox
            key={item.id.videoId}
            videoId={item.id.videoId}
            thumbnailURL={item.snippet.thumbnails.high.url}
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
            publishedAt={item.snippet.publishedAt}
            description={item.snippet.description}
          />
        );
      })}
    </div>
  );
}
