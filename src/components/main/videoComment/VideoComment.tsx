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
  const { isLoading, refetch, error, data } = useQuery('videoComments', () =>
    getVideoComment(videoId)
  );

  useEffect(() => {
    refetch();
  }, [videoId]);

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  const { items } = data;

  return (
    <div className="w-4/5">
      <div className="font-black text-xl mt-4">
        총 댓글 {Number(commentCount).toLocaleString('ko-KR')}개
      </div>
      {items.map((item: Item) => {
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
