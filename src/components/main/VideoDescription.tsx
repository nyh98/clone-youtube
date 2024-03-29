import React from 'react';

interface Description {
  description: string;
}

export default function VideoDescription({ description }: Description) {
  return (
    <div className="bg-zinc-200 p-2 text-sm my-2 rounded-xl whitespace-pre-line dark:bg-zinc-500">
      {description}
    </div>
  );
}
