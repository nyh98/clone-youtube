import getChannelDetail from './getChannelDetail';

export default async function getVideoDetail(videoId: string | undefined) {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`
  )
    .then(res => res.json())
    .then(async video => {
      const channelId = video.items[0].snippet.channelId;
      const channelDetail = await getChannelDetail(channelId);

      return { video, channelDetail };
    });
}

/**
 * `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`
 */
