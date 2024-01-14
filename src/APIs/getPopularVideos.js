export default async function getPopularVideos() {
  console.log('데이터 요청 중');
  return fetch('data/popular.json') //인기 동영상 요청
    .then(res => res.json());
}
