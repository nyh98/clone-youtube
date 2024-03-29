interface Item {
  [key: string]: any;
}

export default async function getChannelDetail(channelIds: string) {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelIds}&key=${process.env.REACT_APP_API_KEY}`
  )
    .then(res => res.json())
    .then(data =>
      data.items.map((item: Item) => {
        return {
          channelTitle: item.snippet.title,
          channelId: item.id,
          profileURL: item.snippet.thumbnails.medium.url,
          subscriberCount: item.statistics.subscriberCount,
        };
      })
    );
}

/**
 * 채널 정보 요청
 * @ids &id={id}
 *  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelIds}&key=${process.env.REACT_APP_API_KEY}`
 * 
  '/data/onlyChannel.json'
 */
