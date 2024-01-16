import React from 'react';
import VideoBox from '../../components/main/VideoBox';
import LoadingPage from '../LoadingPage';
import ErrorPage from '../ErrorPage';
import { useQuery } from 'react-query';
import getPopularVideos from '../../APIs/getPopularVideos';
import getPopularProfile from '../../APIs/getPopularProfile';

interface Item {
  [key: string]: any;
}

const queryOptin = {
  staleTime: 1000 * 60 * 5,
  refetchOnWindowFocus: false, // 개발중 포커스 업데이트 기능 off
};
export default function PopularVideos() {
  // const { popular, profile } = useGetPopularVideos();
  const popular = useQuery('popularData', getPopularVideos, queryOptin);

  const profile = useQuery(
    'popularProfile',
    () => getPopularProfile('test'),
    queryOptin
  );

  if (popular.isLoading || profile.isLoading) return <LoadingPage />;

  if (popular.error || profile.error) return <ErrorPage />;

  const profileURLs = profile.data.items.map(
    (item: Item) => item.snippet.thumbnails.high.url
  );

  const { items } = popular.data;

  return (
    <div className="grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {items &&
        items.map((item: Item, index: string) => (
          <VideoBox
            key={item.id}
            title={item.snippet.title}
            thumbnail={item.snippet.thumbnails.medium.url}
            link={item.id}
            publishedAt={item.snippet.publishedAt}
            channelTitle={item.snippet.channelTitle}
            viewCount={item.statistics.viewCount}
            profileURL={profileURLs[index]}
          />
        ))}
    </div>
  );
}
