import React from 'react';
import VideoBox from '../../components/main/VideoBox';
import LoadingPage from '../LoadingPage';
import ErrorPage from '../ErrorPage';
import { useQuery } from 'react-query';
import getPopularVideos from '../../APIs/getPopularVideos';
import { useOutletContext } from 'react-router-dom';

interface Item {
  [key: string]: any;
}

export default function PopularVideos() {
  const { isLoading, error, data } = useQuery('popularData', getPopularVideos, {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false, // 개발중 포커스 업데이트 기능 off
  });

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  function getProfileURL(videoChannelId: string) {
    let URL = '';
    for (let profile of data?.profiles) {
      if (videoChannelId === profile.channelId) {
        URL = profile.profileURL;
        break;
      }
    }
    return URL;
  }

  const { items } = data?.videos;

  return (
    <div className="grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {items &&
        items.map((item: Item) => (
          <VideoBox
            key={item.id}
            title={item.snippet.title}
            thumbnail={item.snippet.thumbnails.medium.url}
            link={item.id}
            publishedAt={item.snippet.publishedAt}
            channelTitle={item.snippet.channelTitle}
            viewCount={item.statistics.viewCount}
            profileURL={getProfileURL(item.snippet.channelId)}
          />
        ))}
    </div>
  );
}