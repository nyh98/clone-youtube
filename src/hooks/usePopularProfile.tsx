import React from 'react';
import { useQuery } from 'react-query';
import getPopularProfile from '../APIs/getPopularProfile';

export default function usePopularProfile(ids: string) {
  console.log('동영상 프로필 요청중..');
  const { isLoading, error, data } = useQuery(
    'popularProfile',
    () => getPopularProfile(ids),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  return { isLoading, error, data };
}
