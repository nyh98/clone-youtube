import React from 'react';
import { useQuery } from 'react-query';
import searchVideo from '../../APIs/searchVideo';
import LoadingPage from '../../pages/LoadingPage';
import ErrorPage from '../../pages/ErrorPage';
import getRelativeTime from '../utils/getRelativeTime';
import { Link } from 'react-router-dom';

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
  console.log(items);
  return (
    <div className="flex flex-col w-[30%] flex-shrink-0 max-xl:hidden ">
      {items.map((item: Item) => {
        return (
          <div className="flex ml-4 mb-3 pr-4">
            <Link to={`/video/${item.id.videoId}`} className="flex-shrink-0 ">
              <img
                src={item.snippet.thumbnails.high.url}
                alt="thumbnails"
                className="w-[170px] h-[90px] rounded-2xl "
              />
            </Link>
            <div className="ml-2">
              <div className="line-clamp-2 font-semibold">
                {item.snippet.title}
              </div>
              <div className="text-xs line-clamp-1">
                {item.snippet.channelTitle}
              </div>
              <div className="text-xs">
                {getRelativeTime(item.snippet.publishedAt)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
{
  /* <div className=" w-2/5 h-screen flex flex-col px-6 ">
        <div className="w-[360px] h-[94px] bg-slate-600 mb-5"></div>
      </div> */
}
