import React, { useEffect, useState } from 'react';
import VideoBox from './element/VideoBox';

interface popular {
  [key: string]: any;
}

interface item {
  [key: string]: any;
}

export default function PopularVideos() {
  const [videos, setVideos] = useState<popular>({});

  useEffect(() => {
    fetch('data/popular.json') //
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  const { items } = videos;

  return (
    <div className="flex flex-wrap">
      {items &&
        items.map((item: item) => (
          <VideoBox
            title={item.snippet.title}
            thumbnail={item.snippet.thumbnails.medium.url}
          />
        ))}
    </div>
  );

  //   return (
  //     <div>
  //       {items.map((item: item) => (
  //         <div>{item['snippet']['title']}</div>
  //       ))}
  //     </div>
  //   );
}
