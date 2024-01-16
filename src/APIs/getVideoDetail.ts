export default async function getVideoDetail(videoId: string | undefined) {
  return fetch('/data/videoDetail.json').then(res => res.json());
}

/**
 * https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id={videoId}&key=[API_KEY]
 */
