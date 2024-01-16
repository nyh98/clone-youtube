interface Item {
  [key: string]: any;
}

export default async function getPopularProfile(channelIds: string) {
  console.log('인기 동영상 프로필 요청중...');

  return fetch('data/channel.json')
    .then(res => res.json())
    .then(data =>
      data.items.map((item: Item) => {
        return {
          channelId: item.id,
          profileURL: item.snippet.thumbnails.medium.url,
        };
      })
    );
}

/**
 * 채널 정보 요청
 * @ids &id={id}
 *  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet${channelIds}&key=${process.env.REACT_APP_API_KEY} `
  )
 */
