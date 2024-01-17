export default async function getVideoComment(videoId: string | undefined) {
  console.log('댓글 데이터 요청중');
  return fetch('/data/videoComment.json').then(res => res.json());
}

/**
 * '/data/videoComment.json'
 * 비디오 댓글 10개 요청(시간순)
 * `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&videoId=${videoId}&key=${process.env.REACT_APP_API_KEY}`
 */
