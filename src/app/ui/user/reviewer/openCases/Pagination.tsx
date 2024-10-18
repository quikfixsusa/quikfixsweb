import { Dispatch, SetStateAction } from 'react';

export default function Pagination({
  page,
  count,
  setPage,
}: {
  page: number;
  count: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  const ITEM_PER_PAGE = 6;

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;
  const maxPage = Math.ceil(count / ITEM_PER_PAGE);

  const handlePrev = () => {
    if (hasPrev) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (hasNext) {
      setPage(page + 1);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex">
        <button
          className="rounded-l-md border border-gray-300 bg-gray-200 px-4 disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={!hasPrev}
          onClick={handlePrev}
        >
          «
        </button>
        <p className="border border-gray-300 bg-gray-100 px-6 py-2 text-sm">
          {page} / {maxPage}
        </p>
        <button
          className="rounded-r-md border border-gray-300 bg-gray-200 px-4 disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={!hasNext}
          onClick={handleNext}
        >
          »
        </button>
      </div>
    </div>
  );
}
