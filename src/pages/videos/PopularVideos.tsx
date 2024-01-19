import React from 'react';
import LoadingPage from '../LoadingPage';
import ErrorPage from '../ErrorPage';
import { useQuery } from 'react-query';
import getPopularVideos from '../../APIs/getPopularVideos';
import VideoBox from '../../components/main/VideoBox';

interface Item {
  [key: string]: any;
}

export default function PopularVideos() {
  const { isLoading, error, data } = useQuery('popularData', getPopularVideos, {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  function getProfileURL(videoChannelId: string) {
    let URL = '';
    for (let channel of data?.channelDetails) {
      if (videoChannelId === channel.channelId) {
        URL = channel.profileURL;
        break;
      }
    }
    return URL;
  }

  const { items } = data?.videos;

  return (
    <div className="grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {items.map((item: Item) => (
        <VideoBox
          key={item.id}
          title={item.snippet.title}
          thumbnail={item.snippet.thumbnails.medium.url}
          videoId={item.id}
          publishedAt={item.snippet.publishedAt}
          channelTitle={item.snippet.channelTitle}
          viewCount={item.statistics.viewCount}
          profileURL={getProfileURL(item.snippet.channelId)}
        />
      ))}
    </div>
  );
}
