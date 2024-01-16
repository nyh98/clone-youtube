export default async function getPopularProfile(ids: string) {
  console.log('인기 동영상 프로필 요청중...');
  return fetch('data/channel.json').then(res => res.json());
}

/**
 * 채널 정보 요청
 * @ids &id={id}
 * https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id={ids}=[YOUR_API_KEY]
 */
