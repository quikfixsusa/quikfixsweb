export default function CardSkeleton() {
  return (
    <div className="flex flex-3 flex-col gap-3 rounded-xl border border-gray-300 p-4">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="h-4 w-[30%] animate-pulse rounded bg-gray-400" />
        <div className="h-5 w-[25%] animate-pulse rounded bg-gray-400" />
      </div>
      <div className="flex items-center gap-3">
        <div className="min-h-11 min-w-11 animate-pulse rounded-full bg-gray-400" />
        <div className="flex w-full flex-col gap-1">
          <div className="h-4 w-[30%] animate-pulse rounded bg-gray-400" />
          <div className="h-3 w-[50%] animate-pulse rounded bg-gray-400" />
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="h-4 w-[30%] animate-pulse rounded bg-gray-400" />
        <div className="h-6 w-[40%] animate-pulse rounded bg-gray-400" />
      </div>
      <div className="flex w-full items-center">
        <div className="h-4 w-full animate-pulse rounded-l-lg border border-white bg-gray-400" />
        <div className="h-4 w-full animate-pulse border border-white bg-gray-400" />
        <div className="h-4 w-full animate-pulse border border-white bg-gray-400" />
        <div className="h-4 w-full animate-pulse rounded-r-lg border border-white bg-gray-400" />
      </div>
      <hr />
      <div className="h-10 w-full animate-pulse rounded-md bg-gray-400" />
    </div>
  );
}