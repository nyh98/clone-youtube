/* https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=KR&key=[YOUR_API_KEY] 
   한국 인기동영상 25개 요청 
*/

export default async function getPopularVideos() {
  console.log(process.env.REACT_APP_API_KEY);
  console.log('데이터 요청 중');
  return fetch('/data/popular.json').then(res => res.json()); //인기 동영상 요청
}
