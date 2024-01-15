import React from 'react';
import { useQuery } from 'react-query';
import getPopularVideos from '../APIs/getPopularVideos';
import getVideoComment from '../APIs/getVideoComment';

export default function useGetPopularVideos() {
  console.log('인기 동영상 훅 데이터 요청중..');
  const { isLoading, error, data } = useQuery('popularData', getPopularVideos, {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false, // 개발중 포커스 업데이트 기능 off
  });

  return { isLoading, error, data };
}
