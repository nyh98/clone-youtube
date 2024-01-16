/* https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=KR&key=[YOUR_API_KEY] 
   한국 인기동영상 25개 요청 
*/

import getChannelDetail from './getChannelDetail';

interface Item {
  [key: string]: any;
}

export default async function getPopularVideos() {
  console.log('인기 동영상 데이터 요청 중...');
  return fetch('data/popular.json') //인기 동영상 요청
    .then(res => res.json())
    .then(async videos => {
      //channelId 추출
      const channelIds = videos.items
        .map((item: Item) => '&id=' + item.snippet.channelId)
        .join('');

      const channelDetails = await getChannelDetail(channelIds); //해당 채널 정보 get

      return { videos, channelDetails };
    });
}
