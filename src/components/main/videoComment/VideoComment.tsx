import React from 'react';
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
  const { isLoading, error, data } = useQuery(
    'videoComments',
    () => getVideoComment(videoId),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorPage />;

  const { items } = data;

  return (
    <div>
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
