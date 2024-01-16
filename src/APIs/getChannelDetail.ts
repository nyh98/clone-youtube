interface Item {
  [key: string]: any;
}

export default async function getChannelDetail(channelIds: string) {
  console.log('채널 정보 요청중...');

  return fetch('data/channel.json')
    .then(res => res.json())
    .then(data =>
      data.items.map((item: Item) => {
        return {
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
 * `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelIds}&key=${process.env.REACT_APP_API_KEY}`
 * 
  )
 */
