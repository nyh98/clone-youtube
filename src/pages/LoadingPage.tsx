import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

export default function LoadingPage() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <AiOutlineLoading className="h-1/4 w-1/5 animate-spin" />
    </div>
  );
}
