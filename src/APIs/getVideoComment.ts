export default async function getVideoComment(videoId: string | undefined) {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&videoId=${videoId}&key=${process.env.REACT_APP_API_KEY}`
  ).then(res => res.json());
}

/**
 * '/data/videoComment.json'
 * 비디오 댓글 10개 요청(시간순)
 * `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&videoId=${videoId}&key=${process.env.REACT_APP_API_KEY}`
 */
