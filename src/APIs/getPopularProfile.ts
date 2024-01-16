export default async function getPopularProfile(ids: string) {
  return fetch('data/channel.json').then(res => res.json());
}

/**
 * 채널 정보 요청
 * @ids &id={id}
 * https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id={ids}=[YOUR_API_KEY]
 */
