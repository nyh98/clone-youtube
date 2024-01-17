export default async function searchVideo(keyWord: string) {
  console.log('비디오 검색 중...');
  return fetch('/data/searchVideo.json').then(res => res.json());
}

/**
 * 20개 비디오 검색
 * https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyWord}&type=video&key=[YOUR_API_KEY
 */
