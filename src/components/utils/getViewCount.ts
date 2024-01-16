export default function getViewCount(viewCount: string) {
  const scale = Math.floor(+viewCount / 10000); //만 단위로 나눔

  if (scale >= 10000) {
    return `조회수 ${Math.floor(scale / 10000)}억회`;
  } else if (scale > 0) {
    return `조회수 ${Math.floor(scale)}만회`;
  }

  return `조회수 ${scale.toLocaleString('ko-KR')}회`;
}
