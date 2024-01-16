import React from 'react';
import { useQuery } from 'react-query';
import getPopularVideos from '../APIs/getPopularVideos';
import usePopularProfile from './usePopularProfile';

export default function useGetPopularVideos() {
  console.log('인기 동영상 훅 데이터 요청중..');
  const popular = useQuery('popularData', getPopularVideos, {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false, // 개발중 포커스 업데이트 기능 off
  });

  const profile = usePopularProfile('test');

  return { popular, profile };
}
