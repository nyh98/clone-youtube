import React, { useEffect, useState } from 'react';
import VideoBox from './element/VideoBox';
import { useQuery } from 'react-query';
import getPopularVideos from '../../APIs/getPopularVideos';

interface popular {
  [key: string]: any;
}

interface item {
  [key: string]: any;
}

export default function PopularVideos() {
  const { isLoading, error, data } = useQuery('popularData', getPopularVideos);

  const { items } = data;
  return (
    <div className="flex flex-wrap justify-center">
      {items &&
        items.map((item: item) => (
          <VideoBox
            title={item.snippet.title}
            thumbnail={item.snippet.thumbnails.medium.url}
          />
        ))}
    </div>
  );
}
