"use client";

import { useEffect } from "react";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center gap-4 px-6 text-center">
      <p>Something went wrong while loading the blog.</p>
      <button
        className="bg-rose-200 px-3 py-1 font-semibold"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
