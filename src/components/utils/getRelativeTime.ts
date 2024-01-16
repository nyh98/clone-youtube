export default function getRelativeTime(publishedAt: string) {
  const currentDate = new Date().getTime();
  const videoDate = new Date(publishedAt).getTime();

  const diff = (currentDate - videoDate) / 1000;

  const times = [
    { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
    { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
    { name: '일', milliSeconds: 60 * 60 * 24 },
    { name: '시간', milliSeconds: 60 * 60 },
    { name: '분', milliSeconds: 60 },
  ];

  for (let time of times) {
    const betweenTime = Math.floor(diff / time.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${time.name} 전`;
    }
  }
  return '방금 전';
}
