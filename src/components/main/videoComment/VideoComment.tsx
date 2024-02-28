import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import getVideoComment from '../../../APIs/getVideoComment';
import LoadingPage from '../../../pages/LoadingPage';
import ErrorPage from '../../../pages/ErrorPage';
import CommentBox from './CommentBox';

interface Comment {
  videoId: string | undefined;
  commentCount: string;
}

interface Item {
  [key: string]: any;
}

export default function VideoComment({ videoId, commentCount }: Comment) {
  const { isLoading, refetch, error, data } = useQuery(
    'videoComments',
    () => getVideoComment(videoId),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  useEffect(() => {
    refetch();
  }, [videoId, refetch]);

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  const { items } = data;

  return (
    <div className="w-4/5 grid-in-comment max-lg:col-end-[-1] max-lg:row-start-[-1]">
      <div className="font-black text-xl mt-4">
        {items
          ? `총 댓글${Number(commentCount).toLocaleString('ko-KR')}개`
          : '해당 비디오 댓글을 가져올 수 없습니다 댓글이 비활성화 상태일 수 있습니다 '}
      </div>
      {items?.map((item: Item) => {
        const { snippet } = item.snippet.topLevelComment;

        return (
          <CommentBox
            key={item.id}
            authorDisplayName={snippet.authorDisplayName}
            authorProfileImageUrl={snippet.authorProfileImageUrl}
            updatedAt={snippet.updatedAt}
            textDisplay={snippet.textDisplay}
          />
        );
      })}
    </div>
  );
}
